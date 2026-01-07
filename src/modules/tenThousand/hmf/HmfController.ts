import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmf")
export default class HmfController {
  @operation({
    summary: "Get Hmf",
  })
  @get()
  static getHmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmf",
  })
  @post("{id}")
  static createHmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
