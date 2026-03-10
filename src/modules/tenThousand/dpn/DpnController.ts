import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpn")
export default class DpnController {
  @operation({
    summary: "Get Dpn",
  })
  @get()
  static getDpn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpn",
  })
  @post("{id}")
  static createDpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
