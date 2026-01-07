import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebh")
export default class EbhController {
  @operation({
    summary: "Get Ebh",
  })
  @get()
  static getEbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebh",
  })
  @post("{id}")
  static createEbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
