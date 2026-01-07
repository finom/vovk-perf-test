import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enn")
export default class EnnController {
  @operation({
    summary: "Get Enn",
  })
  @get()
  static getEnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enn",
  })
  @post("{id}")
  static createEnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
