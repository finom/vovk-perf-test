import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arv")
export default class ArvController {
  @operation({
    summary: "Get Arv",
  })
  @get()
  static getArv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arv",
  })
  @post("{id}")
  static createArv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
