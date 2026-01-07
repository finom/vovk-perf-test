import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frr")
export default class FrrController {
  @operation({
    summary: "Get Frr",
  })
  @get()
  static getFrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frr",
  })
  @post("{id}")
  static createFrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
