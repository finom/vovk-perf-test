import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfd")
export default class CfdController {
  @operation({
    summary: "Get Cfd",
  })
  @get()
  static getCfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfd",
  })
  @post("{id}")
  static createCfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
