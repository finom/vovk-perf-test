import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnw")
export default class DnwController {
  @operation({
    summary: "Get Dnw",
  })
  @get()
  static getDnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnw",
  })
  @post("{id}")
  static createDnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
