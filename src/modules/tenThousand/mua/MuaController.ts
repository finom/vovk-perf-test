import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mua")
export default class MuaController {
  @operation({
    summary: "Get Mua",
  })
  @get()
  static getMua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mua",
  })
  @post("{id}")
  static createMua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
