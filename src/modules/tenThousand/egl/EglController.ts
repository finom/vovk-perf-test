import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egl")
export default class EglController {
  @operation({
    summary: "Get Egl",
  })
  @get()
  static getEgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egl",
  })
  @post("{id}")
  static createEgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
