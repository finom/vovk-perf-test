import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coo")
export default class CooController {
  @operation({
    summary: "Get Coo",
  })
  @get()
  static getCoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coo",
  })
  @post("{id}")
  static createCoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
