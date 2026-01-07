import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgt")
export default class KgtController {
  @operation({
    summary: "Get Kgt",
  })
  @get()
  static getKgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgt",
  })
  @post("{id}")
  static createKgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
