import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwk")
export default class BwkController {
  @operation({
    summary: "Get Bwk",
  })
  @get()
  static getBwk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwk",
  })
  @post("{id}")
  static createBwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
