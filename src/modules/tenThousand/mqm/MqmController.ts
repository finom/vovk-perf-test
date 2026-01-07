import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqm")
export default class MqmController {
  @operation({
    summary: "Get Mqm",
  })
  @get()
  static getMqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqm",
  })
  @post("{id}")
  static createMqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
