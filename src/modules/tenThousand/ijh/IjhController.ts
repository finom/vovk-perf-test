import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijh")
export default class IjhController {
  @operation({
    summary: "Get Ijh",
  })
  @get()
  static getIjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijh",
  })
  @post("{id}")
  static createIjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
