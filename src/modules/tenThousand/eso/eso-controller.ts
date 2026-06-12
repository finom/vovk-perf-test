import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eso")
export default class EsoController {
  @operation({
    summary: "Get Eso",
  })
  @get()
  static getEso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eso",
  })
  @post("{id}")
  static createEso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
