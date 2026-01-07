import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awy")
export default class AwyController {
  @operation({
    summary: "Get Awy",
  })
  @get()
  static getAwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awy",
  })
  @post("{id}")
  static createAwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
