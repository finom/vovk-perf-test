import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kly")
export default class KlyController {
  @operation({
    summary: "Get Kly",
  })
  @get()
  static getKly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kly",
  })
  @post("{id}")
  static createKly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
