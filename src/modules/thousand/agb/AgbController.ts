import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agb")
export default class AgbController {
  @operation({
    summary: "Get Agb",
  })
  @get()
  static getAgb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agb",
  })
  @post("{id}")
  static createAgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
