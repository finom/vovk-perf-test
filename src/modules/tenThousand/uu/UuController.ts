import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uu")
export default class UuController {
  @operation({
    summary: "Get Uu",
  })
  @get()
  static getUu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uu",
  })
  @post("{id}")
  static createUu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
