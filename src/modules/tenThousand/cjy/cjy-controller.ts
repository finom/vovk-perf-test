import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjy")
export default class CjyController {
  @operation({
    summary: "Get Cjy",
  })
  @get()
  static getCjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjy",
  })
  @post("{id}")
  static createCjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
