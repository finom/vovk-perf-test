import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpn")
export default class GpnController {
  @operation({
    summary: "Get Gpn",
  })
  @get()
  static getGpn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpn",
  })
  @post("{id}")
  static createGpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
