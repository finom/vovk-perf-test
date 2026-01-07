import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwo")
export default class IwoController {
  @operation({
    summary: "Get Iwo",
  })
  @get()
  static getIwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwo",
  })
  @post("{id}")
  static createIwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
