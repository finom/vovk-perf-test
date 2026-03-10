import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekv")
export default class EkvController {
  @operation({
    summary: "Get Ekv",
  })
  @get()
  static getEkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekv",
  })
  @post("{id}")
  static createEkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
