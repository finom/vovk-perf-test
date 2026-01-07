import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krh")
export default class KrhController {
  @operation({
    summary: "Get Krh",
  })
  @get()
  static getKrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krh",
  })
  @post("{id}")
  static createKrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
