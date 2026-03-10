import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajy")
export default class AjyController {
  @operation({
    summary: "Get Ajy",
  })
  @get()
  static getAjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajy",
  })
  @post("{id}")
  static createAjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
