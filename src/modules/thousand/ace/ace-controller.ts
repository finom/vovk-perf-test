import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ace")
export default class AceController {
  @operation({
    summary: "Get Ace",
  })
  @get()
  static getAce = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ace",
  })
  @post("{id}")
  static createAce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
