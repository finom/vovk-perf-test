import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mg")
export default class MgController {
  @operation({
    summary: "Get Mg",
  })
  @get()
  static getMg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mg",
  })
  @post("{id}")
  static createMg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
