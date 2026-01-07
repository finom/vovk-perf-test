import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivf")
export default class IvfController {
  @operation({
    summary: "Get Ivf",
  })
  @get()
  static getIvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivf",
  })
  @post("{id}")
  static createIvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
