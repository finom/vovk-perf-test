import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxi")
export default class MxiController {
  @operation({
    summary: "Get Mxi",
  })
  @get()
  static getMxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxi",
  })
  @post("{id}")
  static createMxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
