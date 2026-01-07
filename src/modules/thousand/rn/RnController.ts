import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rn")
export default class RnController {
  @operation({
    summary: "Get Rn",
  })
  @get()
  static getRn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rn",
  })
  @post("{id}")
  static createRn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
