import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fml")
export default class FmlController {
  @operation({
    summary: "Get Fml",
  })
  @get()
  static getFml = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fml",
  })
  @post("{id}")
  static createFml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
