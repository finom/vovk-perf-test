import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejt")
export default class EjtController {
  @operation({
    summary: "Get Ejt",
  })
  @get()
  static getEjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejt",
  })
  @post("{id}")
  static createEjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
