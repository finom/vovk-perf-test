import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjw")
export default class FjwController {
  @operation({
    summary: "Get Fjw",
  })
  @get()
  static getFjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjw",
  })
  @post("{id}")
  static createFjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
