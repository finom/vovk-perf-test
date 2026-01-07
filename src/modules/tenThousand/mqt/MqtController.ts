import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqt")
export default class MqtController {
  @operation({
    summary: "Get Mqt",
  })
  @get()
  static getMqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqt",
  })
  @post("{id}")
  static createMqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
