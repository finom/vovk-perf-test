import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifj")
export default class IfjController {
  @operation({
    summary: "Get Ifj",
  })
  @get()
  static getIfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifj",
  })
  @post("{id}")
  static createIfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
