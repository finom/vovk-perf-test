import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjl")
export default class FjlController {
  @operation({
    summary: "Get Fjl",
  })
  @get()
  static getFjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjl",
  })
  @post("{id}")
  static createFjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
