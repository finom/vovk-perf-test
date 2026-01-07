import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lng")
export default class LngController {
  @operation({
    summary: "Get Lng",
  })
  @get()
  static getLng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lng",
  })
  @post("{id}")
  static createLng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
