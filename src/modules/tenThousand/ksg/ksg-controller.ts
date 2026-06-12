import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksg")
export default class KsgController {
  @operation({
    summary: "Get Ksg",
  })
  @get()
  static getKsg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksg",
  })
  @post("{id}")
  static createKsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
