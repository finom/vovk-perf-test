import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjw")
export default class BjwController {
  @operation({
    summary: "Get Bjw",
  })
  @get()
  static getBjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjw",
  })
  @post("{id}")
  static createBjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
