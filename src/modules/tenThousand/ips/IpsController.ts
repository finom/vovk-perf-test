import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ips")
export default class IpsController {
  @operation({
    summary: "Get Ips",
  })
  @get()
  static getIps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ips",
  })
  @post("{id}")
  static createIps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
