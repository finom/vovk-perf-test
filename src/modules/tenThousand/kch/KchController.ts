import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kch")
export default class KchController {
  @operation({
    summary: "Get Kch",
  })
  @get()
  static getKch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kch",
  })
  @post("{id}")
  static createKch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
