import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iel")
export default class IelController {
  @operation({
    summary: "Get Iel",
  })
  @get()
  static getIel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iel",
  })
  @post("{id}")
  static createIel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
