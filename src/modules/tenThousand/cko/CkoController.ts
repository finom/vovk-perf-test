import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cko")
export default class CkoController {
  @operation({
    summary: "Get Cko",
  })
  @get()
  static getCko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cko",
  })
  @post("{id}")
  static createCko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
