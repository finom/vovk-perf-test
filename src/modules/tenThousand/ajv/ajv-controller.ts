import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajv")
export default class AjvController {
  @operation({
    summary: "Get Ajv",
  })
  @get()
  static getAjv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajv",
  })
  @post("{id}")
  static createAjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
