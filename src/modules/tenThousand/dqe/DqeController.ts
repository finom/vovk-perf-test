import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqe")
export default class DqeController {
  @operation({
    summary: "Get Dqe",
  })
  @get()
  static getDqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqe",
  })
  @post("{id}")
  static createDqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
