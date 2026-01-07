import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kja")
export default class KjaController {
  @operation({
    summary: "Get Kja",
  })
  @get()
  static getKja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kja",
  })
  @post("{id}")
  static createKja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
