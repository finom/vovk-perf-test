import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cem")
export default class CemController {
  @operation({
    summary: "Get Cem",
  })
  @get()
  static getCem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cem",
  })
  @post("{id}")
  static createCem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
