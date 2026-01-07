import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abx")
export default class AbxController {
  @operation({
    summary: "Get Abx",
  })
  @get()
  static getAbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abx",
  })
  @post("{id}")
  static createAbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
