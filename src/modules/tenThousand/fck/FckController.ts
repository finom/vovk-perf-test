import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fck")
export default class FckController {
  @operation({
    summary: "Get Fck",
  })
  @get()
  static getFck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fck",
  })
  @post("{id}")
  static createFck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
