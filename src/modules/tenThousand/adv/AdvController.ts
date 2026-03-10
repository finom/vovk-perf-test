import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adv")
export default class AdvController {
  @operation({
    summary: "Get Adv",
  })
  @get()
  static getAdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adv",
  })
  @post("{id}")
  static createAdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
