import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kp")
export default class KpController {
  @operation({
    summary: "Get Kp",
  })
  @get()
  static getKp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kp",
  })
  @post("{id}")
  static createKp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
