import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kc")
export default class KcController {
  @operation({
    summary: "Get Kc",
  })
  @get()
  static getKc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kc",
  })
  @post("{id}")
  static createKc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
