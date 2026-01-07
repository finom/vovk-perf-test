import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksc")
export default class KscController {
  @operation({
    summary: "Get Ksc",
  })
  @get()
  static getKsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksc",
  })
  @post("{id}")
  static createKsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
