import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnq")
export default class DnqController {
  @operation({
    summary: "Get Dnq",
  })
  @get()
  static getDnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnq",
  })
  @post("{id}")
  static createDnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
