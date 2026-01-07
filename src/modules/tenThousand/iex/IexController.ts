import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iex")
export default class IexController {
  @operation({
    summary: "Get Iex",
  })
  @get()
  static getIex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iex",
  })
  @post("{id}")
  static createIex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
