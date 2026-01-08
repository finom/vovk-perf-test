import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngb")
export default class NgbController {
  @operation({
    summary: "Get Ngb",
  })
  @get()
  static getNgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngb",
  })
  @post("{id}")
  static createNgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
