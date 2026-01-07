import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmh")
export default class KmhController {
  @operation({
    summary: "Get Kmh",
  })
  @get()
  static getKmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmh",
  })
  @post("{id}")
  static createKmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
