import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjd")
export default class BjdController {
  @operation({
    summary: "Get Bjd",
  })
  @get()
  static getBjd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjd",
  })
  @post("{id}")
  static createBjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
