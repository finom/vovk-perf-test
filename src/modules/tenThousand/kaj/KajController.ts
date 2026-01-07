import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaj")
export default class KajController {
  @operation({
    summary: "Get Kaj",
  })
  @get()
  static getKaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaj",
  })
  @post("{id}")
  static createKaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
