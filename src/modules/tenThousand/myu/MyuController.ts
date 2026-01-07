import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myu")
export default class MyuController {
  @operation({
    summary: "Get Myu",
  })
  @get()
  static getMyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myu",
  })
  @post("{id}")
  static createMyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
