import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cve")
export default class CveController {
  @operation({
    summary: "Get Cve",
  })
  @get()
  static getCve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cve",
  })
  @post("{id}")
  static createCve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
