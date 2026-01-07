import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjm")
export default class FjmController {
  @operation({
    summary: "Get Fjm",
  })
  @get()
  static getFjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjm",
  })
  @post("{id}")
  static createFjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
