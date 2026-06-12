import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpn")
export default class HpnController {
  @operation({
    summary: "Get Hpn",
  })
  @get()
  static getHpn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpn",
  })
  @post("{id}")
  static createHpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
