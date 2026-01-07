import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjp")
export default class FjpController {
  @operation({
    summary: "Get Fjp",
  })
  @get()
  static getFjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjp",
  })
  @post("{id}")
  static createFjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
