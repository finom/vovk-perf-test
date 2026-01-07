import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mey")
export default class MeyController {
  @operation({
    summary: "Get Mey",
  })
  @get()
  static getMey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mey",
  })
  @post("{id}")
  static createMey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
