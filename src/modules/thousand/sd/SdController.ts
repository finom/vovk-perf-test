import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sd")
export default class SdController {
  @operation({
    summary: "Get Sd",
  })
  @get()
  static getSd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sd",
  })
  @post("{id}")
  static createSd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
