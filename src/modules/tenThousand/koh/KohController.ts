import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koh")
export default class KohController {
  @operation({
    summary: "Get Koh",
  })
  @get()
  static getKoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koh",
  })
  @post("{id}")
  static createKoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
