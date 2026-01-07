import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kui")
export default class KuiController {
  @operation({
    summary: "Get Kui",
  })
  @get()
  static getKui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kui",
  })
  @post("{id}")
  static createKui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
