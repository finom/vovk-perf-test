import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ci")
export default class CiController {
  @operation({
    summary: "Get Ci",
  })
  @get()
  static getCi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ci",
  })
  @post("{id}")
  static createCi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
