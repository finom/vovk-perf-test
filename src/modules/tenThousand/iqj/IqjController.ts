import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqj")
export default class IqjController {
  @operation({
    summary: "Get Iqj",
  })
  @get()
  static getIqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqj",
  })
  @post("{id}")
  static createIqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
