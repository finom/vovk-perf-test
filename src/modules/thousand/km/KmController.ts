import { procedure, prefix, get, post, operation } from "vovk";

@prefix("km")
export default class KmController {
  @operation({
    summary: "Get Km",
  })
  @get()
  static getKm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Km",
  })
  @post("{id}")
  static createKm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
