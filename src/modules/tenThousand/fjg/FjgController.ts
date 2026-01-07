import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjg")
export default class FjgController {
  @operation({
    summary: "Get Fjg",
  })
  @get()
  static getFjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjg",
  })
  @post("{id}")
  static createFjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
