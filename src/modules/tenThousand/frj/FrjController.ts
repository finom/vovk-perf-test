import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frj")
export default class FrjController {
  @operation({
    summary: "Get Frj",
  })
  @get()
  static getFrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frj",
  })
  @post("{id}")
  static createFrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
