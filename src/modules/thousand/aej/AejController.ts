import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aej")
export default class AejController {
  @operation({
    summary: "Get Aej",
  })
  @get()
  static getAej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aej",
  })
  @post("{id}")
  static createAej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
