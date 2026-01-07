import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksk")
export default class KskController {
  @operation({
    summary: "Get Ksk",
  })
  @get()
  static getKsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksk",
  })
  @post("{id}")
  static createKsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
