import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fay")
export default class FayController {
  @operation({
    summary: "Get Fay",
  })
  @get()
  static getFay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fay",
  })
  @post("{id}")
  static createFay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
