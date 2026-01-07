import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idd")
export default class IddController {
  @operation({
    summary: "Get Idd",
  })
  @get()
  static getIdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idd",
  })
  @post("{id}")
  static createIdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
