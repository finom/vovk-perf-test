import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aeu")
export default class AeuController {
  @operation({
    summary: "Get Aeu",
  })
  @get()
  static getAeu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aeu",
  })
  @post("{id}")
  static createAeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
