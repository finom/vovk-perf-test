import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyf")
export default class FyfController {
  @operation({
    summary: "Get Fyf",
  })
  @get()
  static getFyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyf",
  })
  @post("{id}")
  static createFyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
