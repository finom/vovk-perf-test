import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzd")
export default class BzdController {
  @operation({
    summary: "Get Bzd",
  })
  @get()
  static getBzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzd",
  })
  @post("{id}")
  static createBzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
