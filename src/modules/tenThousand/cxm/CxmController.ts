import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxm")
export default class CxmController {
  @operation({
    summary: "Get Cxm",
  })
  @get()
  static getCxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxm",
  })
  @post("{id}")
  static createCxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
