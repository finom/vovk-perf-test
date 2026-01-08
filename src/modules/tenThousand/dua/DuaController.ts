import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dua")
export default class DuaController {
  @operation({
    summary: "Get Dua",
  })
  @get()
  static getDua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dua",
  })
  @post("{id}")
  static createDua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
