import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gap")
export default class GapController {
  @operation({
    summary: "Get Gap",
  })
  @get()
  static getGap = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gap",
  })
  @post("{id}")
  static createGap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
