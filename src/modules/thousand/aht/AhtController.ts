import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aht")
export default class AhtController {
  @operation({
    summary: "Get Aht",
  })
  @get()
  static getAht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aht",
  })
  @post("{id}")
  static createAht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
