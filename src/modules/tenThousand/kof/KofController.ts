import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kof")
export default class KofController {
  @operation({
    summary: "Get Kof",
  })
  @get()
  static getKof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kof",
  })
  @post("{id}")
  static createKof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
