import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iky")
export default class IkyController {
  @operation({
    summary: "Get Iky",
  })
  @get()
  static getIky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iky",
  })
  @post("{id}")
  static createIky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
