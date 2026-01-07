import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjn")
export default class FjnController {
  @operation({
    summary: "Get Fjn",
  })
  @get()
  static getFjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjn",
  })
  @post("{id}")
  static createFjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
