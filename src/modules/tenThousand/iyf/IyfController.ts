import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyf")
export default class IyfController {
  @operation({
    summary: "Get Iyf",
  })
  @get()
  static getIyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyf",
  })
  @post("{id}")
  static createIyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
