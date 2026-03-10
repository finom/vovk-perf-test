import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajr")
export default class AjrController {
  @operation({
    summary: "Get Ajr",
  })
  @get()
  static getAjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajr",
  })
  @post("{id}")
  static createAjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
