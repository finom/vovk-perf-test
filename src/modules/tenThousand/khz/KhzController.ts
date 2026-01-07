import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khz")
export default class KhzController {
  @operation({
    summary: "Get Khz",
  })
  @get()
  static getKhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khz",
  })
  @post("{id}")
  static createKhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
