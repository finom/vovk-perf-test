import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyq")
export default class EyqController {
  @operation({
    summary: "Get Eyq",
  })
  @get()
  static getEyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyq",
  })
  @post("{id}")
  static createEyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
