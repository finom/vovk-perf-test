import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqj")
export default class MqjController {
  @operation({
    summary: "Get Mqj",
  })
  @get()
  static getMqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqj",
  })
  @post("{id}")
  static createMqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
