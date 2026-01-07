import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agf")
export default class AgfController {
  @operation({
    summary: "Get Agf",
  })
  @get()
  static getAgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agf",
  })
  @post("{id}")
  static createAgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
