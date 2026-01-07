import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjd")
export default class FjdController {
  @operation({
    summary: "Get Fjd",
  })
  @get()
  static getFjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjd",
  })
  @post("{id}")
  static createFjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
