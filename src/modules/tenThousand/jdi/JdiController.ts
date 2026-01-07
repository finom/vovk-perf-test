import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdi")
export default class JdiController {
  @operation({
    summary: "Get Jdi",
  })
  @get()
  static getJdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdi",
  })
  @post("{id}")
  static createJdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
