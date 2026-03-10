import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdp")
export default class BdpController {
  @operation({
    summary: "Get Bdp",
  })
  @get()
  static getBdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdp",
  })
  @post("{id}")
  static createBdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
