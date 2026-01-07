import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epy")
export default class EpyController {
  @operation({
    summary: "Get Epy",
  })
  @get()
  static getEpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epy",
  })
  @post("{id}")
  static createEpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
