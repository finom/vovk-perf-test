import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajd")
export default class AjdController {
  @operation({
    summary: "Get Ajd",
  })
  @get()
  static getAjd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajd",
  })
  @post("{id}")
  static createAjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
