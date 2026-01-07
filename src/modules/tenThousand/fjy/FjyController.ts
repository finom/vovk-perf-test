import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjy")
export default class FjyController {
  @operation({
    summary: "Get Fjy",
  })
  @get()
  static getFjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjy",
  })
  @post("{id}")
  static createFjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
