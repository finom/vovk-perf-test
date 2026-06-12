import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpn")
export default class FpnController {
  @operation({
    summary: "Get Fpn",
  })
  @get()
  static getFpn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpn",
  })
  @post("{id}")
  static createFpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
