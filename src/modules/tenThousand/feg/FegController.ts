import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feg")
export default class FegController {
  @operation({
    summary: "Get Feg",
  })
  @get()
  static getFeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feg",
  })
  @post("{id}")
  static createFeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
