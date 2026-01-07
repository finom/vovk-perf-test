import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ede")
export default class EdeController {
  @operation({
    summary: "Get Ede",
  })
  @get()
  static getEde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ede",
  })
  @post("{id}")
  static createEde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
