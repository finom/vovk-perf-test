import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kny")
export default class KnyController {
  @operation({
    summary: "Get Kny",
  })
  @get()
  static getKny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kny",
  })
  @post("{id}")
  static createKny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
