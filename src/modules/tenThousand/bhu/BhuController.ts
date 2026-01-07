import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhu")
export default class BhuController {
  @operation({
    summary: "Get Bhu",
  })
  @get()
  static getBhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhu",
  })
  @post("{id}")
  static createBhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
