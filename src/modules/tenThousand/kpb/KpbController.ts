import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpb")
export default class KpbController {
  @operation({
    summary: "Get Kpb",
  })
  @get()
  static getKpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpb",
  })
  @post("{id}")
  static createKpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
