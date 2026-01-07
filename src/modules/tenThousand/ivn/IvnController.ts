import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivn")
export default class IvnController {
  @operation({
    summary: "Get Ivn",
  })
  @get()
  static getIvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivn",
  })
  @post("{id}")
  static createIvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
