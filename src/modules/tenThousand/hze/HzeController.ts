import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hze")
export default class HzeController {
  @operation({
    summary: "Get Hze",
  })
  @get()
  static getHze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hze",
  })
  @post("{id}")
  static createHze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
