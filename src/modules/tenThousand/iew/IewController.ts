import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iew")
export default class IewController {
  @operation({
    summary: "Get Iew",
  })
  @get()
  static getIew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iew",
  })
  @post("{id}")
  static createIew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
