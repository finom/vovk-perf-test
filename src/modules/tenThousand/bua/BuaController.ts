import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bua")
export default class BuaController {
  @operation({
    summary: "Get Bua",
  })
  @get()
  static getBua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bua",
  })
  @post("{id}")
  static createBua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
