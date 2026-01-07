import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqd")
export default class IqdController {
  @operation({
    summary: "Get Iqd",
  })
  @get()
  static getIqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqd",
  })
  @post("{id}")
  static createIqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
