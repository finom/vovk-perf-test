import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfi")
export default class KfiController {
  @operation({
    summary: "Get Kfi",
  })
  @get()
  static getKfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfi",
  })
  @post("{id}")
  static createKfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
