import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eea")
export default class EeaController {
  @operation({
    summary: "Get Eea",
  })
  @get()
  static getEea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eea",
  })
  @post("{id}")
  static createEea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
