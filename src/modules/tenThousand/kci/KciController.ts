import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kci")
export default class KciController {
  @operation({
    summary: "Get Kci",
  })
  @get()
  static getKci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kci",
  })
  @post("{id}")
  static createKci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
