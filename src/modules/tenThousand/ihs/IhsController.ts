import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihs")
export default class IhsController {
  @operation({
    summary: "Get Ihs",
  })
  @get()
  static getIhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihs",
  })
  @post("{id}")
  static createIhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
