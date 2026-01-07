import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdf")
export default class CdfController {
  @operation({
    summary: "Get Cdf",
  })
  @get()
  static getCdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdf",
  })
  @post("{id}")
  static createCdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
