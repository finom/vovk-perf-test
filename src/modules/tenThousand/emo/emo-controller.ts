import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emo")
export default class EmoController {
  @operation({
    summary: "Get Emo",
  })
  @get()
  static getEmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emo",
  })
  @post("{id}")
  static createEmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
