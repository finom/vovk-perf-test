import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjg")
export default class BjgController {
  @operation({
    summary: "Get Bjg",
  })
  @get()
  static getBjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjg",
  })
  @post("{id}")
  static createBjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
