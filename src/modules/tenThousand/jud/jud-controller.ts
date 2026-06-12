import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jud")
export default class JudController {
  @operation({
    summary: "Get Jud",
  })
  @get()
  static getJud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jud",
  })
  @post("{id}")
  static createJud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
