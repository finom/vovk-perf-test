import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjj")
export default class FjjController {
  @operation({
    summary: "Get Fjj",
  })
  @get()
  static getFjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjj",
  })
  @post("{id}")
  static createFjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
