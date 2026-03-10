import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjr")
export default class BjrController {
  @operation({
    summary: "Get Bjr",
  })
  @get()
  static getBjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjr",
  })
  @post("{id}")
  static createBjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
