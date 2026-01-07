import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bey")
export default class BeyController {
  @operation({
    summary: "Get Bey",
  })
  @get()
  static getBey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bey",
  })
  @post("{id}")
  static createBey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
