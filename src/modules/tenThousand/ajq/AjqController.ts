import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajq")
export default class AjqController {
  @operation({
    summary: "Get Ajq",
  })
  @get()
  static getAjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajq",
  })
  @post("{id}")
  static createAjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
