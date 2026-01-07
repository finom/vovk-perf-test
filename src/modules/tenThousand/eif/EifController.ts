import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eif")
export default class EifController {
  @operation({
    summary: "Get Eif",
  })
  @get()
  static getEif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eif",
  })
  @post("{id}")
  static createEif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
