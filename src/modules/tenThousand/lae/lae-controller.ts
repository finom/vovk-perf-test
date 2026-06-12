import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lae")
export default class LaeController {
  @operation({
    summary: "Get Lae",
  })
  @get()
  static getLae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lae",
  })
  @post("{id}")
  static createLae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
