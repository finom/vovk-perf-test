import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ato")
export default class AtoController {
  @operation({
    summary: "Get Ato",
  })
  @get()
  static getAto = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ato",
  })
  @post("{id}")
  static createAto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
