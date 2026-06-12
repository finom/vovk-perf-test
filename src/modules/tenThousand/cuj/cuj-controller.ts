import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuj")
export default class CujController {
  @operation({
    summary: "Get Cuj",
  })
  @get()
  static getCuj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuj",
  })
  @post("{id}")
  static createCuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
