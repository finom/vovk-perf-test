import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajn")
export default class AjnController {
  @operation({
    summary: "Get Ajn",
  })
  @get()
  static getAjn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajn",
  })
  @post("{id}")
  static createAjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
