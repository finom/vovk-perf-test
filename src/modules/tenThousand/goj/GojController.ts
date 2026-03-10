import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goj")
export default class GojController {
  @operation({
    summary: "Get Goj",
  })
  @get()
  static getGoj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Goj",
  })
  @post("{id}")
  static createGoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
