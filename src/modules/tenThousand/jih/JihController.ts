import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jih")
export default class JihController {
  @operation({
    summary: "Get Jih",
  })
  @get()
  static getJih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jih",
  })
  @post("{id}")
  static createJih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
