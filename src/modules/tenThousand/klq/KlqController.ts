import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klq")
export default class KlqController {
  @operation({
    summary: "Get Klq",
  })
  @get()
  static getKlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klq",
  })
  @post("{id}")
  static createKlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
