import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ily")
export default class IlyController {
  @operation({
    summary: "Get Ily",
  })
  @get()
  static getIly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ily",
  })
  @post("{id}")
  static createIly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
