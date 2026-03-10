import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjh")
export default class BjhController {
  @operation({
    summary: "Get Bjh",
  })
  @get()
  static getBjh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjh",
  })
  @post("{id}")
  static createBjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
