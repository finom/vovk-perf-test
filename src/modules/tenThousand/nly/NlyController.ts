import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nly")
export default class NlyController {
  @operation({
    summary: "Get Nly",
  })
  @get()
  static getNly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nly",
  })
  @post("{id}")
  static createNly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
