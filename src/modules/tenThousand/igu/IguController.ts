import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igu")
export default class IguController {
  @operation({
    summary: "Get Igu",
  })
  @get()
  static getIgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igu",
  })
  @post("{id}")
  static createIgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
