import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ick")
export default class IckController {
  @operation({
    summary: "Get Ick",
  })
  @get()
  static getIck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ick",
  })
  @post("{id}")
  static createIck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
