import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpn")
export default class JpnController {
  @operation({
    summary: "Get Jpn",
  })
  @get()
  static getJpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpn",
  })
  @post("{id}")
  static createJpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
