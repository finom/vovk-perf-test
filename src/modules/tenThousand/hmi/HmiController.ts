import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmi")
export default class HmiController {
  @operation({
    summary: "Get Hmi",
  })
  @get()
  static getHmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmi",
  })
  @post("{id}")
  static createHmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
