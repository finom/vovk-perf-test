import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abt")
export default class AbtController {
  @operation({
    summary: "Get Abt",
  })
  @get()
  static getAbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abt",
  })
  @post("{id}")
  static createAbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
