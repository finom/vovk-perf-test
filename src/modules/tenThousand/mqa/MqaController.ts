import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqa")
export default class MqaController {
  @operation({
    summary: "Get Mqa",
  })
  @get()
  static getMqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqa",
  })
  @post("{id}")
  static createMqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
