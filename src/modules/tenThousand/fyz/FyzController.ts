import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyz")
export default class FyzController {
  @operation({
    summary: "Get Fyz",
  })
  @get()
  static getFyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyz",
  })
  @post("{id}")
  static createFyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
