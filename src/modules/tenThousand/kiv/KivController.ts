import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiv")
export default class KivController {
  @operation({
    summary: "Get Kiv",
  })
  @get()
  static getKiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiv",
  })
  @post("{id}")
  static createKiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
