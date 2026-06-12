import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jse")
export default class JseController {
  @operation({
    summary: "Get Jse",
  })
  @get()
  static getJse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jse",
  })
  @post("{id}")
  static createJse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
