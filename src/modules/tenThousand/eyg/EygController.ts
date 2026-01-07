import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyg")
export default class EygController {
  @operation({
    summary: "Get Eyg",
  })
  @get()
  static getEyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyg",
  })
  @post("{id}")
  static createEyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
