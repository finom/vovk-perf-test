import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gre")
export default class GreController {
  @operation({
    summary: "Get Gre",
  })
  @get()
  static getGre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gre",
  })
  @post("{id}")
  static createGre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
