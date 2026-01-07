import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqc")
export default class MqcController {
  @operation({
    summary: "Get Mqc",
  })
  @get()
  static getMqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqc",
  })
  @post("{id}")
  static createMqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
