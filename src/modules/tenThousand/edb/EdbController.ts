import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edb")
export default class EdbController {
  @operation({
    summary: "Get Edb",
  })
  @get()
  static getEdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edb",
  })
  @post("{id}")
  static createEdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
