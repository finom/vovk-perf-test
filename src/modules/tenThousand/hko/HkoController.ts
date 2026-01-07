import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hko")
export default class HkoController {
  @operation({
    summary: "Get Hko",
  })
  @get()
  static getHko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hko",
  })
  @post("{id}")
  static createHko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
