import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hua")
export default class HuaController {
  @operation({
    summary: "Get Hua",
  })
  @get()
  static getHua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hua",
  })
  @post("{id}")
  static createHua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
