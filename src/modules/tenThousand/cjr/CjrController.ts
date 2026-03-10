import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjr")
export default class CjrController {
  @operation({
    summary: "Get Cjr",
  })
  @get()
  static getCjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjr",
  })
  @post("{id}")
  static createCjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
