import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kps")
export default class KpsController {
  @operation({
    summary: "Get Kps",
  })
  @get()
  static getKps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kps",
  })
  @post("{id}")
  static createKps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
