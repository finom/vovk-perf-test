import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjf")
export default class BjfController {
  @operation({
    summary: "Get Bjf",
  })
  @get()
  static getBjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjf",
  })
  @post("{id}")
  static createBjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
