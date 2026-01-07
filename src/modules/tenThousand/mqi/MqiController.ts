import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqi")
export default class MqiController {
  @operation({
    summary: "Get Mqi",
  })
  @get()
  static getMqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqi",
  })
  @post("{id}")
  static createMqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
