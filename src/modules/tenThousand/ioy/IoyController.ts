import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioy")
export default class IoyController {
  @operation({
    summary: "Get Ioy",
  })
  @get()
  static getIoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioy",
  })
  @post("{id}")
  static createIoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
