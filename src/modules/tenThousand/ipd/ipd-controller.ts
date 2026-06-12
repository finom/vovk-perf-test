import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipd")
export default class IpdController {
  @operation({
    summary: "Get Ipd",
  })
  @get()
  static getIpd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipd",
  })
  @post("{id}")
  static createIpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
