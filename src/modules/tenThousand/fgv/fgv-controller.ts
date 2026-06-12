import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgv")
export default class FgvController {
  @operation({
    summary: "Get Fgv",
  })
  @get()
  static getFgv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgv",
  })
  @post("{id}")
  static createFgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
