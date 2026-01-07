import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsr")
export default class FsrController {
  @operation({
    summary: "Get Fsr",
  })
  @get()
  static getFsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsr",
  })
  @post("{id}")
  static createFsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
