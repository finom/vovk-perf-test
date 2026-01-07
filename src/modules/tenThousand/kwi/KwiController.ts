import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwi")
export default class KwiController {
  @operation({
    summary: "Get Kwi",
  })
  @get()
  static getKwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwi",
  })
  @post("{id}")
  static createKwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
