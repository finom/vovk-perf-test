import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqf")
export default class MqfController {
  @operation({
    summary: "Get Mqf",
  })
  @get()
  static getMqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqf",
  })
  @post("{id}")
  static createMqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
