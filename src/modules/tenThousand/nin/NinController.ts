import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nin")
export default class NinController {
  @operation({
    summary: "Get Nin",
  })
  @get()
  static getNin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nin",
  })
  @post("{id}")
  static createNin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
