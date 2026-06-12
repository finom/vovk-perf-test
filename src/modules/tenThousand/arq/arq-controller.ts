import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arq")
export default class ArqController {
  @operation({
    summary: "Get Arq",
  })
  @get()
  static getArq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arq",
  })
  @post("{id}")
  static createArq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
