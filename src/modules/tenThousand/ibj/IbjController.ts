import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibj")
export default class IbjController {
  @operation({
    summary: "Get Ibj",
  })
  @get()
  static getIbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibj",
  })
  @post("{id}")
  static createIbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
