import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezm")
export default class EzmController {
  @operation({
    summary: "Get Ezm",
  })
  @get()
  static getEzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezm",
  })
  @post("{id}")
  static createEzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
