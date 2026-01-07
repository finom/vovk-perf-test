import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyq")
export default class KyqController {
  @operation({
    summary: "Get Kyq",
  })
  @get()
  static getKyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyq",
  })
  @post("{id}")
  static createKyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
