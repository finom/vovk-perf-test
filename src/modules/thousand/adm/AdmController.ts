import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adm")
export default class AdmController {
  @operation({
    summary: "Get Adm",
  })
  @get()
  static getAdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adm",
  })
  @post("{id}")
  static createAdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
