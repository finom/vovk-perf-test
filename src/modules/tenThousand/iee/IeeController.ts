import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iee")
export default class IeeController {
  @operation({
    summary: "Get Iee",
  })
  @get()
  static getIee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iee",
  })
  @post("{id}")
  static createIee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
