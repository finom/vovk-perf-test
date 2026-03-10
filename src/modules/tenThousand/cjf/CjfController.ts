import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjf")
export default class CjfController {
  @operation({
    summary: "Get Cjf",
  })
  @get()
  static getCjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjf",
  })
  @post("{id}")
  static createCjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
