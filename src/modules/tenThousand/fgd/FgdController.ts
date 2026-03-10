import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgd")
export default class FgdController {
  @operation({
    summary: "Get Fgd",
  })
  @get()
  static getFgd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgd",
  })
  @post("{id}")
  static createFgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
