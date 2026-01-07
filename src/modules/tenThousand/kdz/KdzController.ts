import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdz")
export default class KdzController {
  @operation({
    summary: "Get Kdz",
  })
  @get()
  static getKdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdz",
  })
  @post("{id}")
  static createKdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
