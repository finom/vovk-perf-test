import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ege")
export default class EgeController {
  @operation({
    summary: "Get Ege",
  })
  @get()
  static getEge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ege",
  })
  @post("{id}")
  static createEge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
