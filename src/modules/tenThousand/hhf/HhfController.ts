import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhf")
export default class HhfController {
  @operation({
    summary: "Get Hhf",
  })
  @get()
  static getHhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhf",
  })
  @post("{id}")
  static createHhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
