import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibf")
export default class IbfController {
  @operation({
    summary: "Get Ibf",
  })
  @get()
  static getIbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibf",
  })
  @post("{id}")
  static createIbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
