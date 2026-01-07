import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czo")
export default class CzoController {
  @operation({
    summary: "Get Czo",
  })
  @get()
  static getCzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czo",
  })
  @post("{id}")
  static createCzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
