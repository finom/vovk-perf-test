import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihl")
export default class IhlController {
  @operation({
    summary: "Get Ihl",
  })
  @get()
  static getIhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihl",
  })
  @post("{id}")
  static createIhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
