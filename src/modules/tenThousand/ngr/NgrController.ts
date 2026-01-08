import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngr")
export default class NgrController {
  @operation({
    summary: "Get Ngr",
  })
  @get()
  static getNgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngr",
  })
  @post("{id}")
  static createNgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
