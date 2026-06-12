import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gks")
export default class GksController {
  @operation({
    summary: "Get Gks",
  })
  @get()
  static getGks = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gks",
  })
  @post("{id}")
  static createGks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
