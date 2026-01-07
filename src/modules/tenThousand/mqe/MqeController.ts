import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqe")
export default class MqeController {
  @operation({
    summary: "Get Mqe",
  })
  @get()
  static getMqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqe",
  })
  @post("{id}")
  static createMqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
