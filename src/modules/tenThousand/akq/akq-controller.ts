import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akq")
export default class AkqController {
  @operation({
    summary: "Get Akq",
  })
  @get()
  static getAkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Akq",
  })
  @post("{id}")
  static createAkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
