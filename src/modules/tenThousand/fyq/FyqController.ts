import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyq")
export default class FyqController {
  @operation({
    summary: "Get Fyq",
  })
  @get()
  static getFyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyq",
  })
  @post("{id}")
  static createFyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
