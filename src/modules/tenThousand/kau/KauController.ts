import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kau")
export default class KauController {
  @operation({
    summary: "Get Kau",
  })
  @get()
  static getKau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kau",
  })
  @post("{id}")
  static createKau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
