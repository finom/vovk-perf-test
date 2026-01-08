import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxi")
export default class BxiController {
  @operation({
    summary: "Get Bxi",
  })
  @get()
  static getBxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxi",
  })
  @post("{id}")
  static createBxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
