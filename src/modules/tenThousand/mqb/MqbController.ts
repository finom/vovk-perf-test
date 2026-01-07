import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqb")
export default class MqbController {
  @operation({
    summary: "Get Mqb",
  })
  @get()
  static getMqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqb",
  })
  @post("{id}")
  static createMqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
