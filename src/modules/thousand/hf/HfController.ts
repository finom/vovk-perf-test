import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hf")
export default class HfController {
  @operation({
    summary: "Get Hf",
  })
  @get()
  static getHf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hf",
  })
  @post("{id}")
  static createHf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
