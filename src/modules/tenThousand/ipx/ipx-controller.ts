import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipx")
export default class IpxController {
  @operation({
    summary: "Get Ipx",
  })
  @get()
  static getIpx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipx",
  })
  @post("{id}")
  static createIpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
