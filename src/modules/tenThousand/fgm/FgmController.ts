import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgm")
export default class FgmController {
  @operation({
    summary: "Get Fgm",
  })
  @get()
  static getFgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgm",
  })
  @post("{id}")
  static createFgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
