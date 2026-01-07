import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahs")
export default class AhsController {
  @operation({
    summary: "Get Ahs",
  })
  @get()
  static getAhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahs",
  })
  @post("{id}")
  static createAhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
