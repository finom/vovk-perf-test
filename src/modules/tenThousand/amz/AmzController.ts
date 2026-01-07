import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amz")
export default class AmzController {
  @operation({
    summary: "Get Amz",
  })
  @get()
  static getAmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amz",
  })
  @post("{id}")
  static createAmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
