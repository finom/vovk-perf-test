import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elx")
export default class ElxController {
  @operation({
    summary: "Get Elx",
  })
  @get()
  static getElx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elx",
  })
  @post("{id}")
  static createElx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
