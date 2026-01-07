import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbh")
export default class GbhController {
  @operation({
    summary: "Get Gbh",
  })
  @get()
  static getGbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbh",
  })
  @post("{id}")
  static createGbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
