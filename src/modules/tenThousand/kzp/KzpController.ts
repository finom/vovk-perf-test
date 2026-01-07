import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzp")
export default class KzpController {
  @operation({
    summary: "Get Kzp",
  })
  @get()
  static getKzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzp",
  })
  @post("{id}")
  static createKzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
