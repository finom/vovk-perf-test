import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjw")
export default class CjwController {
  @operation({
    summary: "Get Cjw",
  })
  @get()
  static getCjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjw",
  })
  @post("{id}")
  static createCjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
