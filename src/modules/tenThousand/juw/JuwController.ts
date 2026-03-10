import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juw")
export default class JuwController {
  @operation({
    summary: "Get Juw",
  })
  @get()
  static getJuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juw",
  })
  @post("{id}")
  static createJuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
