import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivq")
export default class IvqController {
  @operation({
    summary: "Get Ivq",
  })
  @get()
  static getIvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivq",
  })
  @post("{id}")
  static createIvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
