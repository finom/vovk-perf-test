import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glg")
export default class GlgController {
  @operation({
    summary: "Get Glg",
  })
  @get()
  static getGlg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glg",
  })
  @post("{id}")
  static createGlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
