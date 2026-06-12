import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gls")
export default class GlsController {
  @operation({
    summary: "Get Gls",
  })
  @get()
  static getGls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gls",
  })
  @post("{id}")
  static createGls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
