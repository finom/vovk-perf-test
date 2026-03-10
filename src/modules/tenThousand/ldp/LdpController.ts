import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldp")
export default class LdpController {
  @operation({
    summary: "Get Ldp",
  })
  @get()
  static getLdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldp",
  })
  @post("{id}")
  static createLdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
