import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwn")
export default class HwnController {
  @operation({
    summary: "Get Hwn",
  })
  @get()
  static getHwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwn",
  })
  @post("{id}")
  static createHwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
