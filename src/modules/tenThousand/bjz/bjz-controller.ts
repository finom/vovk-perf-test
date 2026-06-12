import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjz")
export default class BjzController {
  @operation({
    summary: "Get Bjz",
  })
  @get()
  static getBjz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjz",
  })
  @post("{id}")
  static createBjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
