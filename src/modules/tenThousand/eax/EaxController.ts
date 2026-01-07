import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eax")
export default class EaxController {
  @operation({
    summary: "Get Eax",
  })
  @get()
  static getEax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eax",
  })
  @post("{id}")
  static createEax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
