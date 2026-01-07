import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ard")
export default class ArdController {
  @operation({
    summary: "Get Ard",
  })
  @get()
  static getArd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ard",
  })
  @post("{id}")
  static createArd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
