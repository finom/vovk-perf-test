import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjc")
export default class FjcController {
  @operation({
    summary: "Get Fjc",
  })
  @get()
  static getFjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjc",
  })
  @post("{id}")
  static createFjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
