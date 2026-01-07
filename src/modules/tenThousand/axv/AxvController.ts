import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axv")
export default class AxvController {
  @operation({
    summary: "Get Axv",
  })
  @get()
  static getAxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axv",
  })
  @post("{id}")
  static createAxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
