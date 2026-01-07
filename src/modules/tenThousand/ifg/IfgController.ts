import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifg")
export default class IfgController {
  @operation({
    summary: "Get Ifg",
  })
  @get()
  static getIfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifg",
  })
  @post("{id}")
  static createIfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
