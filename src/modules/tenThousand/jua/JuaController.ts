import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jua")
export default class JuaController {
  @operation({
    summary: "Get Jua",
  })
  @get()
  static getJua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jua",
  })
  @post("{id}")
  static createJua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
