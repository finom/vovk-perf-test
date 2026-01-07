import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqr")
export default class MqrController {
  @operation({
    summary: "Get Mqr",
  })
  @get()
  static getMqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqr",
  })
  @post("{id}")
  static createMqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
