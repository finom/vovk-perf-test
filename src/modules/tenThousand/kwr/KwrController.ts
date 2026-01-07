import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwr")
export default class KwrController {
  @operation({
    summary: "Get Kwr",
  })
  @get()
  static getKwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwr",
  })
  @post("{id}")
  static createKwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
