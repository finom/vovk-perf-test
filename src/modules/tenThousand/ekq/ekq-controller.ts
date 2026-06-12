import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekq")
export default class EkqController {
  @operation({
    summary: "Get Ekq",
  })
  @get()
  static getEkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekq",
  })
  @post("{id}")
  static createEkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
