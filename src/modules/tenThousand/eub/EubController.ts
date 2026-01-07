import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eub")
export default class EubController {
  @operation({
    summary: "Get Eub",
  })
  @get()
  static getEub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eub",
  })
  @post("{id}")
  static createEub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
