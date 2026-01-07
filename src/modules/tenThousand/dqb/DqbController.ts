import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqb")
export default class DqbController {
  @operation({
    summary: "Get Dqb",
  })
  @get()
  static getDqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqb",
  })
  @post("{id}")
  static createDqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
