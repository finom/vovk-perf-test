import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lml")
export default class LmlController {
  @operation({
    summary: "Get Lml",
  })
  @get()
  static getLml = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lml",
  })
  @post("{id}")
  static createLml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
