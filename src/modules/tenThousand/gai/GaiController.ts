import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gai")
export default class GaiController {
  @operation({
    summary: "Get Gai",
  })
  @get()
  static getGai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gai",
  })
  @post("{id}")
  static createGai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
