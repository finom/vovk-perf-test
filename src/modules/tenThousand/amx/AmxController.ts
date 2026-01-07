import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amx")
export default class AmxController {
  @operation({
    summary: "Get Amx",
  })
  @get()
  static getAmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amx",
  })
  @post("{id}")
  static createAmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
