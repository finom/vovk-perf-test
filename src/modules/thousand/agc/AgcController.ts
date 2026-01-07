import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agc")
export default class AgcController {
  @operation({
    summary: "Get Agc",
  })
  @get()
  static getAgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agc",
  })
  @post("{id}")
  static createAgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
