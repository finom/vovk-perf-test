import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcx")
export default class BcxController {
  @operation({
    summary: "Get Bcx",
  })
  @get()
  static getBcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcx",
  })
  @post("{id}")
  static createBcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
