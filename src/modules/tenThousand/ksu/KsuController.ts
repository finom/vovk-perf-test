import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksu")
export default class KsuController {
  @operation({
    summary: "Get Ksu",
  })
  @get()
  static getKsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksu",
  })
  @post("{id}")
  static createKsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
