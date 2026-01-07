import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dox")
export default class DoxController {
  @operation({
    summary: "Get Dox",
  })
  @get()
  static getDox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dox",
  })
  @post("{id}")
  static createDox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
