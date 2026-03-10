import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcm")
export default class BcmController {
  @operation({
    summary: "Get Bcm",
  })
  @get()
  static getBcm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcm",
  })
  @post("{id}")
  static createBcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
