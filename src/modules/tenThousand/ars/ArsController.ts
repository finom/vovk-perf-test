import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ars")
export default class ArsController {
  @operation({
    summary: "Get Ars",
  })
  @get()
  static getArs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ars",
  })
  @post("{id}")
  static createArs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
