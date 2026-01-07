import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjh")
export default class FjhController {
  @operation({
    summary: "Get Fjh",
  })
  @get()
  static getFjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjh",
  })
  @post("{id}")
  static createFjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
