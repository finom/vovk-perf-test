import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjb")
export default class FjbController {
  @operation({
    summary: "Get Fjb",
  })
  @get()
  static getFjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjb",
  })
  @post("{id}")
  static createFjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
