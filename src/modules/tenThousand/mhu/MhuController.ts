import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhu")
export default class MhuController {
  @operation({
    summary: "Get Mhu",
  })
  @get()
  static getMhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhu",
  })
  @post("{id}")
  static createMhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
