import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kel")
export default class KelController {
  @operation({
    summary: "Get Kel",
  })
  @get()
  static getKel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kel",
  })
  @post("{id}")
  static createKel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
