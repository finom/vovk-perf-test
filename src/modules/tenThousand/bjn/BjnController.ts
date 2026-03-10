import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjn")
export default class BjnController {
  @operation({
    summary: "Get Bjn",
  })
  @get()
  static getBjn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjn",
  })
  @post("{id}")
  static createBjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
