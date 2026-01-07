import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibk")
export default class IbkController {
  @operation({
    summary: "Get Ibk",
  })
  @get()
  static getIbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibk",
  })
  @post("{id}")
  static createIbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
