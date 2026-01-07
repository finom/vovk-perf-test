import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nld")
export default class NldController {
  @operation({
    summary: "Get Nld",
  })
  @get()
  static getNld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nld",
  })
  @post("{id}")
  static createNld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
