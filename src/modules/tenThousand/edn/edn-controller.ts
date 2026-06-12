import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edn")
export default class EdnController {
  @operation({
    summary: "Get Edn",
  })
  @get()
  static getEdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edn",
  })
  @post("{id}")
  static createEdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
