import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afm")
export default class AfmController {
  @operation({
    summary: "Get Afm",
  })
  @get()
  static getAfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afm",
  })
  @post("{id}")
  static createAfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
