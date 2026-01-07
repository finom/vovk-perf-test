import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqz")
export default class MqzController {
  @operation({
    summary: "Get Mqz",
  })
  @get()
  static getMqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqz",
  })
  @post("{id}")
  static createMqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
