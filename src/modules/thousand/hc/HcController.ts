import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hc")
export default class HcController {
  @operation({
    summary: "Get Hc",
  })
  @get()
  static getHc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hc",
  })
  @post("{id}")
  static createHc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
