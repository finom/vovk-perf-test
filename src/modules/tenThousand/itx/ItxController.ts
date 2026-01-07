import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itx")
export default class ItxController {
  @operation({
    summary: "Get Itx",
  })
  @get()
  static getItx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itx",
  })
  @post("{id}")
  static createItx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
