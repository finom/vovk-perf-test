import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exr")
export default class ExrController {
  @operation({
    summary: "Get Exr",
  })
  @get()
  static getExr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exr",
  })
  @post("{id}")
  static createExr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
