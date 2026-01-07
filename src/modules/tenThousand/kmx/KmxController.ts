import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmx")
export default class KmxController {
  @operation({
    summary: "Get Kmx",
  })
  @get()
  static getKmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmx",
  })
  @post("{id}")
  static createKmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
