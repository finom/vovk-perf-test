import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klm")
export default class KlmController {
  @operation({
    summary: "Get Klm",
  })
  @get()
  static getKlm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klm",
  })
  @post("{id}")
  static createKlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
