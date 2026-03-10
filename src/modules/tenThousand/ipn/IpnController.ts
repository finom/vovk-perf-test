import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipn")
export default class IpnController {
  @operation({
    summary: "Get Ipn",
  })
  @get()
  static getIpn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipn",
  })
  @post("{id}")
  static createIpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
