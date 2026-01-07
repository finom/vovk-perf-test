import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apu")
export default class ApuController {
  @operation({
    summary: "Get Apu",
  })
  @get()
  static getApu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apu",
  })
  @post("{id}")
  static createApu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
