import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjt")
export default class FjtController {
  @operation({
    summary: "Get Fjt",
  })
  @get()
  static getFjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjt",
  })
  @post("{id}")
  static createFjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
