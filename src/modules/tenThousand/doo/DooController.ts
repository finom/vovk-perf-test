import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doo")
export default class DooController {
  @operation({
    summary: "Get Doo",
  })
  @get()
  static getDoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doo",
  })
  @post("{id}")
  static createDoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
