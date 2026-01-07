import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbh")
export default class HbhController {
  @operation({
    summary: "Get Hbh",
  })
  @get()
  static getHbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbh",
  })
  @post("{id}")
  static createHbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
