import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmj")
export default class KmjController {
  @operation({
    summary: "Get Kmj",
  })
  @get()
  static getKmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmj",
  })
  @post("{id}")
  static createKmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
