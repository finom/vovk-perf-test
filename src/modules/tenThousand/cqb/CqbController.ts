import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqb")
export default class CqbController {
  @operation({
    summary: "Get Cqb",
  })
  @get()
  static getCqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqb",
  })
  @post("{id}")
  static createCqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
