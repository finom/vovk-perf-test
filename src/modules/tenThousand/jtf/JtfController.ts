import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtf")
export default class JtfController {
  @operation({
    summary: "Get Jtf",
  })
  @get()
  static getJtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtf",
  })
  @post("{id}")
  static createJtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
