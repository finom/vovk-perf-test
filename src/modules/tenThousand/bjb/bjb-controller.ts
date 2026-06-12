import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjb")
export default class BjbController {
  @operation({
    summary: "Get Bjb",
  })
  @get()
  static getBjb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjb",
  })
  @post("{id}")
  static createBjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
