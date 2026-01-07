import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mby")
export default class MbyController {
  @operation({
    summary: "Get Mby",
  })
  @get()
  static getMby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mby",
  })
  @post("{id}")
  static createMby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
