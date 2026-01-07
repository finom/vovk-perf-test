import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abq")
export default class AbqController {
  @operation({
    summary: "Get Abq",
  })
  @get()
  static getAbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abq",
  })
  @post("{id}")
  static createAbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
