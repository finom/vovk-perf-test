import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afd")
export default class AfdController {
  @operation({
    summary: "Get Afd",
  })
  @get()
  static getAfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afd",
  })
  @post("{id}")
  static createAfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
