import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcz")
export default class BczController {
  @operation({
    summary: "Get Bcz",
  })
  @get()
  static getBcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcz",
  })
  @post("{id}")
  static createBcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
