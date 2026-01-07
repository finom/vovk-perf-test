import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kux")
export default class KuxController {
  @operation({
    summary: "Get Kux",
  })
  @get()
  static getKux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kux",
  })
  @post("{id}")
  static createKux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
