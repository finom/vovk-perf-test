import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kus")
export default class KusController {
  @operation({
    summary: "Get Kus",
  })
  @get()
  static getKus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kus",
  })
  @post("{id}")
  static createKus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
