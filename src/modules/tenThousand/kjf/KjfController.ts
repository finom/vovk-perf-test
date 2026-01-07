import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjf")
export default class KjfController {
  @operation({
    summary: "Get Kjf",
  })
  @get()
  static getKjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjf",
  })
  @post("{id}")
  static createKjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
