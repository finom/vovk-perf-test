import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpn")
export default class JpnController {
  @operation({
    summary: "Get Jpn",
  })
  @get()
  static getJpn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpn",
  })
  @post("{id}")
  static createJpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
