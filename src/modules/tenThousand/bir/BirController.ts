import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bir")
export default class BirController {
  @operation({
    summary: "Get Bir",
  })
  @get()
  static getBir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bir",
  })
  @post("{id}")
  static createBir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
