import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rw")
export default class RwController {
  @operation({
    summary: "Get Rw",
  })
  @get()
  static getRw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rw",
  })
  @post("{id}")
  static createRw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
