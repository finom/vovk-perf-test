import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dej")
export default class DejController {
  @operation({
    summary: "Get Dej",
  })
  @get()
  static getDej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dej",
  })
  @post("{id}")
  static createDej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
