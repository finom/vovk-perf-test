import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrg")
export default class LrgController {
  @operation({
    summary: "Get Lrg",
  })
  @get()
  static getLrg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrg",
  })
  @post("{id}")
  static createLrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
