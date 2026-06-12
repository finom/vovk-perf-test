import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klx")
export default class KlxController {
  @operation({
    summary: "Get Klx",
  })
  @get()
  static getKlx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klx",
  })
  @post("{id}")
  static createKlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
