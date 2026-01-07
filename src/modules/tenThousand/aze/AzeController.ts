import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aze")
export default class AzeController {
  @operation({
    summary: "Get Aze",
  })
  @get()
  static getAze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aze",
  })
  @post("{id}")
  static createAze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
