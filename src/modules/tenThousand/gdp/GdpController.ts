import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdp")
export default class GdpController {
  @operation({
    summary: "Get Gdp",
  })
  @get()
  static getGdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdp",
  })
  @post("{id}")
  static createGdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
