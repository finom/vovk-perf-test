import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bac")
export default class BacController {
  @operation({
    summary: "Get Bac",
  })
  @get()
  static getBac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bac",
  })
  @post("{id}")
  static createBac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
