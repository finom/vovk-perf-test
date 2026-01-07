import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ils")
export default class IlsController {
  @operation({
    summary: "Get Ils",
  })
  @get()
  static getIls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ils",
  })
  @post("{id}")
  static createIls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
