import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngc")
export default class NgcController {
  @operation({
    summary: "Get Ngc",
  })
  @get()
  static getNgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngc",
  })
  @post("{id}")
  static createNgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
