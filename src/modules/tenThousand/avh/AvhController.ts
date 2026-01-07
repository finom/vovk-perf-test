import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avh")
export default class AvhController {
  @operation({
    summary: "Get Avh",
  })
  @get()
  static getAvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avh",
  })
  @post("{id}")
  static createAvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
