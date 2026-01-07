import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjr")
export default class FjrController {
  @operation({
    summary: "Get Fjr",
  })
  @get()
  static getFjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjr",
  })
  @post("{id}")
  static createFjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
