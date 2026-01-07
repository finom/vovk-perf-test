import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esx")
export default class EsxController {
  @operation({
    summary: "Get Esx",
  })
  @get()
  static getEsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esx",
  })
  @post("{id}")
  static createEsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
