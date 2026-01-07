import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqx")
export default class DqxController {
  @operation({
    summary: "Get Dqx",
  })
  @get()
  static getDqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqx",
  })
  @post("{id}")
  static createDqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
