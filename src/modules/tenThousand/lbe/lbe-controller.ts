import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbe")
export default class LbeController {
  @operation({
    summary: "Get Lbe",
  })
  @get()
  static getLbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbe",
  })
  @post("{id}")
  static createLbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
