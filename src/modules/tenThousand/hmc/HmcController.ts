import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmc")
export default class HmcController {
  @operation({
    summary: "Get Hmc",
  })
  @get()
  static getHmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmc",
  })
  @post("{id}")
  static createHmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
