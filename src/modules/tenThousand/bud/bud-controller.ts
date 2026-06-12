import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bud")
export default class BudController {
  @operation({
    summary: "Get Bud",
  })
  @get()
  static getBud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bud",
  })
  @post("{id}")
  static createBud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
