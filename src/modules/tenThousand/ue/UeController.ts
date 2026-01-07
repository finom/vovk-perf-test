import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ue")
export default class UeController {
  @operation({
    summary: "Get Ue",
  })
  @get()
  static getUe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ue",
  })
  @post("{id}")
  static createUe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
