import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyg")
export default class KygController {
  @operation({
    summary: "Get Kyg",
  })
  @get()
  static getKyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyg",
  })
  @post("{id}")
  static createKyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
