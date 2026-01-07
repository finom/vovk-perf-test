import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbu")
export default class HbuController {
  @operation({
    summary: "Get Hbu",
  })
  @get()
  static getHbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbu",
  })
  @post("{id}")
  static createHbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
