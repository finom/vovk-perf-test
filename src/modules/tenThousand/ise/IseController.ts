import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ise")
export default class IseController {
  @operation({
    summary: "Get Ise",
  })
  @get()
  static getIse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ise",
  })
  @post("{id}")
  static createIse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
