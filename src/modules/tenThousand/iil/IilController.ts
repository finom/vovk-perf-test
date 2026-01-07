import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iil")
export default class IilController {
  @operation({
    summary: "Get Iil",
  })
  @get()
  static getIil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iil",
  })
  @post("{id}")
  static createIil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
