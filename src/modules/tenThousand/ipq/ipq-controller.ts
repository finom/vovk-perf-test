import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipq")
export default class IpqController {
  @operation({
    summary: "Get Ipq",
  })
  @get()
  static getIpq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipq",
  })
  @post("{id}")
  static createIpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
