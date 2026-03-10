import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abm")
export default class AbmController {
  @operation({
    summary: "Get Abm",
  })
  @get()
  static getAbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abm",
  })
  @post("{id}")
  static createAbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
