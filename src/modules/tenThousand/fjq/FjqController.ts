import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjq")
export default class FjqController {
  @operation({
    summary: "Get Fjq",
  })
  @get()
  static getFjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjq",
  })
  @post("{id}")
  static createFjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
