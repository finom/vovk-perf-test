import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwk")
export default class MwkController {
  @operation({
    summary: "Get Mwk",
  })
  @get()
  static getMwk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwk",
  })
  @post("{id}")
  static createMwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
