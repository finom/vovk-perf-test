import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqu")
export default class JquController {
  @operation({
    summary: "Get Jqu",
  })
  @get()
  static getJqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqu",
  })
  @post("{id}")
  static createJqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
