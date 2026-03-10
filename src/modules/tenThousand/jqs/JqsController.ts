import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqs")
export default class JqsController {
  @operation({
    summary: "Get Jqs",
  })
  @get()
  static getJqs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqs",
  })
  @post("{id}")
  static createJqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
