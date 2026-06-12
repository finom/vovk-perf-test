import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gta")
export default class GtaController {
  @operation({
    summary: "Get Gta",
  })
  @get()
  static getGta = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gta",
  })
  @post("{id}")
  static createGta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
