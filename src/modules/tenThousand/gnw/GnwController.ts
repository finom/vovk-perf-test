import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnw")
export default class GnwController {
  @operation({
    summary: "Get Gnw",
  })
  @get()
  static getGnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnw",
  })
  @post("{id}")
  static createGnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
