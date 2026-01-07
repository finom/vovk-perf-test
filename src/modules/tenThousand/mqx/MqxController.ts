import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqx")
export default class MqxController {
  @operation({
    summary: "Get Mqx",
  })
  @get()
  static getMqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqx",
  })
  @post("{id}")
  static createMqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
