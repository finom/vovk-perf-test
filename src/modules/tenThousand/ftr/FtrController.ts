import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftr")
export default class FtrController {
  @operation({
    summary: "Get Ftr",
  })
  @get()
  static getFtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftr",
  })
  @post("{id}")
  static createFtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
