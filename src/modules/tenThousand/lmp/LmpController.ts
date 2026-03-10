import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmp")
export default class LmpController {
  @operation({
    summary: "Get Lmp",
  })
  @get()
  static getLmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmp",
  })
  @post("{id}")
  static createLmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
