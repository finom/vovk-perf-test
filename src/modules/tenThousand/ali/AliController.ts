import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ali")
export default class AliController {
  @operation({
    summary: "Get Ali",
  })
  @get()
  static getAli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ali",
  })
  @post("{id}")
  static createAli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
