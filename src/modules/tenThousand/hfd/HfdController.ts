import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfd")
export default class HfdController {
  @operation({
    summary: "Get Hfd",
  })
  @get()
  static getHfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfd",
  })
  @post("{id}")
  static createHfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
