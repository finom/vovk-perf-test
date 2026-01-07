import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ap")
export default class ApController {
  @operation({
    summary: "Get Ap",
  })
  @get()
  static getAp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ap",
  })
  @post("{id}")
  static createAp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
