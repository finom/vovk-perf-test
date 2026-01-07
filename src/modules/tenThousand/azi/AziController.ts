import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azi")
export default class AziController {
  @operation({
    summary: "Get Azi",
  })
  @get()
  static getAzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azi",
  })
  @post("{id}")
  static createAzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
