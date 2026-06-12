import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjm")
export default class CjmController {
  @operation({
    summary: "Get Cjm",
  })
  @get()
  static getCjm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjm",
  })
  @post("{id}")
  static createCjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
