import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("geu")
export default class GeuController {
  @operation({
    summary: "Get Geu",
  })
  @get()
  static getGeu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Geu",
  })
  @post("{id}")
  static createGeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
