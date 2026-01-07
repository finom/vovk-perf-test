import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivw")
export default class IvwController {
  @operation({
    summary: "Get Ivw",
  })
  @get()
  static getIvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivw",
  })
  @post("{id}")
  static createIvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
