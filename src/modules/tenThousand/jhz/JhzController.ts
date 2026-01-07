import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhz")
export default class JhzController {
  @operation({
    summary: "Get Jhz",
  })
  @get()
  static getJhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhz",
  })
  @post("{id}")
  static createJhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
