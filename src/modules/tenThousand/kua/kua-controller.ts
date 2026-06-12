import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kua")
export default class KuaController {
  @operation({
    summary: "Get Kua",
  })
  @get()
  static getKua = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kua",
  })
  @post("{id}")
  static createKua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
