import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exv")
export default class ExvController {
  @operation({
    summary: "Get Exv",
  })
  @get()
  static getExv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exv",
  })
  @post("{id}")
  static createExv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
