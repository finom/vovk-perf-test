import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqz")
export default class DqzController {
  @operation({
    summary: "Get Dqz",
  })
  @get()
  static getDqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqz",
  })
  @post("{id}")
  static createDqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
