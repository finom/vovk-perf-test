import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgp")
export default class BgpController {
  @operation({
    summary: "Get Bgp",
  })
  @get()
  static getBgp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgp",
  })
  @post("{id}")
  static createBgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
