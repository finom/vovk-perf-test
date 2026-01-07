import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdi")
export default class CdiController {
  @operation({
    summary: "Get Cdi",
  })
  @get()
  static getCdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdi",
  })
  @post("{id}")
  static createCdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
