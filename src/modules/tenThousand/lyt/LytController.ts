import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyt")
export default class LytController {
  @operation({
    summary: "Get Lyt",
  })
  @get()
  static getLyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyt",
  })
  @post("{id}")
  static createLyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
