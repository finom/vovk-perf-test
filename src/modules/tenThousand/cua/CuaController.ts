import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cua")
export default class CuaController {
  @operation({
    summary: "Get Cua",
  })
  @get()
  static getCua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cua",
  })
  @post("{id}")
  static createCua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
