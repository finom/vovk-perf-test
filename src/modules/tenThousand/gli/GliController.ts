import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gli")
export default class GliController {
  @operation({
    summary: "Get Gli",
  })
  @get()
  static getGli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gli",
  })
  @post("{id}")
  static createGli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
