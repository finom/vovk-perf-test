import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aas")
export default class AasController {
  @operation({
    summary: "Get Aas",
  })
  @get()
  static getAas = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aas",
  })
  @post("{id}")
  static createAas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
