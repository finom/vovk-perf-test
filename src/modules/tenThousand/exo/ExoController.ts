import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exo")
export default class ExoController {
  @operation({
    summary: "Get Exo",
  })
  @get()
  static getExo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exo",
  })
  @post("{id}")
  static createExo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
