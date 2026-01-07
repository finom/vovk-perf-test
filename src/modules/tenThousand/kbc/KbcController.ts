import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbc")
export default class KbcController {
  @operation({
    summary: "Get Kbc",
  })
  @get()
  static getKbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbc",
  })
  @post("{id}")
  static createKbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
