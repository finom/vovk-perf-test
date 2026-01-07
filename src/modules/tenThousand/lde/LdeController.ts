import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lde")
export default class LdeController {
  @operation({
    summary: "Get Lde",
  })
  @get()
  static getLde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lde",
  })
  @post("{id}")
  static createLde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
