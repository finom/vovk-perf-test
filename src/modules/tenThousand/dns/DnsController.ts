import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dns")
export default class DnsController {
  @operation({
    summary: "Get Dns",
  })
  @get()
  static getDns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dns",
  })
  @post("{id}")
  static createDns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
