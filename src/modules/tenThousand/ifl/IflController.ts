import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifl")
export default class IflController {
  @operation({
    summary: "Get Ifl",
  })
  @get()
  static getIfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifl",
  })
  @post("{id}")
  static createIfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
