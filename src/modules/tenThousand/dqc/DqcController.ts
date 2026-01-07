import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqc")
export default class DqcController {
  @operation({
    summary: "Get Dqc",
  })
  @get()
  static getDqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqc",
  })
  @post("{id}")
  static createDqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
