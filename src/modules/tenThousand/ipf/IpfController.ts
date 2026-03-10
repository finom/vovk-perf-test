import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipf")
export default class IpfController {
  @operation({
    summary: "Get Ipf",
  })
  @get()
  static getIpf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipf",
  })
  @post("{id}")
  static createIpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
