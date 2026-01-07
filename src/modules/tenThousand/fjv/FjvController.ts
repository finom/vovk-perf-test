import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjv")
export default class FjvController {
  @operation({
    summary: "Get Fjv",
  })
  @get()
  static getFjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjv",
  })
  @post("{id}")
  static createFjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
