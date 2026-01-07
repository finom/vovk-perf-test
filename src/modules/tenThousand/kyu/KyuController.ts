import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyu")
export default class KyuController {
  @operation({
    summary: "Get Kyu",
  })
  @get()
  static getKyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyu",
  })
  @post("{id}")
  static createKyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
