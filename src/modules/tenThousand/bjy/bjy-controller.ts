import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjy")
export default class BjyController {
  @operation({
    summary: "Get Bjy",
  })
  @get()
  static getBjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjy",
  })
  @post("{id}")
  static createBjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
