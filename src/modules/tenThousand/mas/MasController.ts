import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mas")
export default class MasController {
  @operation({
    summary: "Get Mas",
  })
  @get()
  static getMas = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mas",
  })
  @post("{id}")
  static createMas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
