import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aib")
export default class AibController {
  @operation({
    summary: "Get Aib",
  })
  @get()
  static getAib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aib",
  })
  @post("{id}")
  static createAib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
