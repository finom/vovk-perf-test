import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gme")
export default class GmeController {
  @operation({
    summary: "Get Gme",
  })
  @get()
  static getGme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gme",
  })
  @post("{id}")
  static createGme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
