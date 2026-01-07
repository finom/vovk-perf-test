import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uk")
export default class UkController {
  @operation({
    summary: "Get Uk",
  })
  @get()
  static getUk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uk",
  })
  @post("{id}")
  static createUk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
