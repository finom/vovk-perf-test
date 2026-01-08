import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fua")
export default class FuaController {
  @operation({
    summary: "Get Fua",
  })
  @get()
  static getFua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fua",
  })
  @post("{id}")
  static createFua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
