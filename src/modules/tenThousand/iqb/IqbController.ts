import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqb")
export default class IqbController {
  @operation({
    summary: "Get Iqb",
  })
  @get()
  static getIqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqb",
  })
  @post("{id}")
  static createIqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
