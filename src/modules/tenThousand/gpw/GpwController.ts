import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpw")
export default class GpwController {
  @operation({
    summary: "Get Gpw",
  })
  @get()
  static getGpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpw",
  })
  @post("{id}")
  static createGpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
