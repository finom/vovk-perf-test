import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjx")
export default class FjxController {
  @operation({
    summary: "Get Fjx",
  })
  @get()
  static getFjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjx",
  })
  @post("{id}")
  static createFjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
