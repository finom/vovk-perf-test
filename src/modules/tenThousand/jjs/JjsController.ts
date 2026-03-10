import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjs")
export default class JjsController {
  @operation({
    summary: "Get Jjs",
  })
  @get()
  static getJjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjs",
  })
  @post("{id}")
  static createJjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
