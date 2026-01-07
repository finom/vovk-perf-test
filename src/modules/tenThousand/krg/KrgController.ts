import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krg")
export default class KrgController {
  @operation({
    summary: "Get Krg",
  })
  @get()
  static getKrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krg",
  })
  @post("{id}")
  static createKrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
