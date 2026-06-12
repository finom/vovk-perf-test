import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ida")
export default class IdaController {
  @operation({
    summary: "Get Ida",
  })
  @get()
  static getIda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ida",
  })
  @post("{id}")
  static createIda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
