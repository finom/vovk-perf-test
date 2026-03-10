import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekb")
export default class EkbController {
  @operation({
    summary: "Get Ekb",
  })
  @get()
  static getEkb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekb",
  })
  @post("{id}")
  static createEkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
