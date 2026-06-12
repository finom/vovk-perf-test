import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxd")
export default class BxdController {
  @operation({
    summary: "Get Bxd",
  })
  @get()
  static getBxd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxd",
  })
  @post("{id}")
  static createBxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
