import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bka")
export default class BkaController {
  @operation({
    summary: "Get Bka",
  })
  @get()
  static getBka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bka",
  })
  @post("{id}")
  static createBka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
