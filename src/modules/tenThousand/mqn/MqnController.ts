import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqn")
export default class MqnController {
  @operation({
    summary: "Get Mqn",
  })
  @get()
  static getMqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqn",
  })
  @post("{id}")
  static createMqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
