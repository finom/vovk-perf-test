import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axs")
export default class AxsController {
  @operation({
    summary: "Get Axs",
  })
  @get()
  static getAxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axs",
  })
  @post("{id}")
  static createAxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
