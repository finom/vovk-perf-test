import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihm")
export default class IhmController {
  @operation({
    summary: "Get Ihm",
  })
  @get()
  static getIhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihm",
  })
  @post("{id}")
  static createIhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
