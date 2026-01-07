import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqk")
export default class IqkController {
  @operation({
    summary: "Get Iqk",
  })
  @get()
  static getIqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqk",
  })
  @post("{id}")
  static createIqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
