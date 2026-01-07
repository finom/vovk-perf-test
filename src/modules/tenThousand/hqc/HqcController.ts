import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqc")
export default class HqcController {
  @operation({
    summary: "Get Hqc",
  })
  @get()
  static getHqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqc",
  })
  @post("{id}")
  static createHqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
