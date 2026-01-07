import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icg")
export default class IcgController {
  @operation({
    summary: "Get Icg",
  })
  @get()
  static getIcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icg",
  })
  @post("{id}")
  static createIcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
