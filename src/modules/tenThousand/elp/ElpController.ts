import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elp")
export default class ElpController {
  @operation({
    summary: "Get Elp",
  })
  @get()
  static getElp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elp",
  })
  @post("{id}")
  static createElp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
