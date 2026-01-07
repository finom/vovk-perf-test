import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eij")
export default class EijController {
  @operation({
    summary: "Get Eij",
  })
  @get()
  static getEij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eij",
  })
  @post("{id}")
  static createEij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
