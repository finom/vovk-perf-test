import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iij")
export default class IijController {
  @operation({
    summary: "Get Iij",
  })
  @get()
  static getIij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iij",
  })
  @post("{id}")
  static createIij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
