import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjz")
export default class FjzController {
  @operation({
    summary: "Get Fjz",
  })
  @get()
  static getFjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjz",
  })
  @post("{id}")
  static createFjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
