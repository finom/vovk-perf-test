import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipw")
export default class IpwController {
  @operation({
    summary: "Get Ipw",
  })
  @get()
  static getIpw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipw",
  })
  @post("{id}")
  static createIpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
