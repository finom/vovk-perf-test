import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqo")
export default class MqoController {
  @operation({
    summary: "Get Mqo",
  })
  @get()
  static getMqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqo",
  })
  @post("{id}")
  static createMqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
