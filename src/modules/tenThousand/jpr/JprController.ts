import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpr")
export default class JprController {
  @operation({
    summary: "Get Jpr",
  })
  @get()
  static getJpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpr",
  })
  @post("{id}")
  static createJpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
