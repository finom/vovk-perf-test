import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fff")
export default class FffController {
  @operation({
    summary: "Get Fff",
  })
  @get()
  static getFff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fff",
  })
  @post("{id}")
  static createFff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
