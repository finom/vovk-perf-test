import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejo")
export default class EjoController {
  @operation({
    summary: "Get Ejo",
  })
  @get()
  static getEjo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejo",
  })
  @post("{id}")
  static createEjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
