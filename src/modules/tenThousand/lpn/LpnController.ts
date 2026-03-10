import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpn")
export default class LpnController {
  @operation({
    summary: "Get Lpn",
  })
  @get()
  static getLpn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpn",
  })
  @post("{id}")
  static createLpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
