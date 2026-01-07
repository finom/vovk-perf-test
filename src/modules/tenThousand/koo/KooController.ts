import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koo")
export default class KooController {
  @operation({
    summary: "Get Koo",
  })
  @get()
  static getKoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koo",
  })
  @post("{id}")
  static createKoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
