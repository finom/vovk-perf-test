import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eap")
export default class EapController {
  @operation({
    summary: "Get Eap",
  })
  @get()
  static getEap = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eap",
  })
  @post("{id}")
  static createEap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
