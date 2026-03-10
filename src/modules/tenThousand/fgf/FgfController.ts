import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgf")
export default class FgfController {
  @operation({
    summary: "Get Fgf",
  })
  @get()
  static getFgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgf",
  })
  @post("{id}")
  static createFgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
