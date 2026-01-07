import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqw")
export default class MqwController {
  @operation({
    summary: "Get Mqw",
  })
  @get()
  static getMqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqw",
  })
  @post("{id}")
  static createMqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
