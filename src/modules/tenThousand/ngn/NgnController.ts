import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngn")
export default class NgnController {
  @operation({
    summary: "Get Ngn",
  })
  @get()
  static getNgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngn",
  })
  @post("{id}")
  static createNgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
