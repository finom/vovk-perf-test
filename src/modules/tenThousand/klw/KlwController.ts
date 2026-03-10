import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klw")
export default class KlwController {
  @operation({
    summary: "Get Klw",
  })
  @get()
  static getKlw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klw",
  })
  @post("{id}")
  static createKlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
