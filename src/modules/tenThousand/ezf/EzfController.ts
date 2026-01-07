import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezf")
export default class EzfController {
  @operation({
    summary: "Get Ezf",
  })
  @get()
  static getEzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezf",
  })
  @post("{id}")
  static createEzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
