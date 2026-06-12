import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndp")
export default class NdpController {
  @operation({
    summary: "Get Ndp",
  })
  @get()
  static getNdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndp",
  })
  @post("{id}")
  static createNdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
