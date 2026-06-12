import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajl")
export default class AjlController {
  @operation({
    summary: "Get Ajl",
  })
  @get()
  static getAjl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajl",
  })
  @post("{id}")
  static createAjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
