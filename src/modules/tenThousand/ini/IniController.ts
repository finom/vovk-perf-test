import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ini")
export default class IniController {
  @operation({
    summary: "Get Ini",
  })
  @get()
  static getIni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ini",
  })
  @post("{id}")
  static createIni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
