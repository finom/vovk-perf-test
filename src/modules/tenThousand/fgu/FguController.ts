import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgu")
export default class FguController {
  @operation({
    summary: "Get Fgu",
  })
  @get()
  static getFgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgu",
  })
  @post("{id}")
  static createFgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
