import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyh")
export default class FyhController {
  @operation({
    summary: "Get Fyh",
  })
  @get()
  static getFyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyh",
  })
  @post("{id}")
  static createFyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
