import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngd")
export default class NgdController {
  @operation({
    summary: "Get Ngd",
  })
  @get()
  static getNgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngd",
  })
  @post("{id}")
  static createNgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
