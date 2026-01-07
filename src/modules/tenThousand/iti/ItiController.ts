import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iti")
export default class ItiController {
  @operation({
    summary: "Get Iti",
  })
  @get()
  static getIti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iti",
  })
  @post("{id}")
  static createIti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
