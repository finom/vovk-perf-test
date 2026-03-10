import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnn")
export default class HnnController {
  @operation({
    summary: "Get Hnn",
  })
  @get()
  static getHnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnn",
  })
  @post("{id}")
  static createHnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
