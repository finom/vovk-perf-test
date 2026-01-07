import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjf")
export default class FjfController {
  @operation({
    summary: "Get Fjf",
  })
  @get()
  static getFjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjf",
  })
  @post("{id}")
  static createFjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
