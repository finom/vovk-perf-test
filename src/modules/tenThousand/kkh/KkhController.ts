import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkh")
export default class KkhController {
  @operation({
    summary: "Get Kkh",
  })
  @get()
  static getKkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkh",
  })
  @post("{id}")
  static createKkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
