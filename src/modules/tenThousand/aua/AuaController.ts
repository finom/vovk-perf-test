import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aua")
export default class AuaController {
  @operation({
    summary: "Get Aua",
  })
  @get()
  static getAua = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aua",
  })
  @post("{id}")
  static createAua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
