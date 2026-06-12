import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grc")
export default class GrcController {
  @operation({
    summary: "Get Grc",
  })
  @get()
  static getGrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grc",
  })
  @post("{id}")
  static createGrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
