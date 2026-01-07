import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dey")
export default class DeyController {
  @operation({
    summary: "Get Dey",
  })
  @get()
  static getDey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dey",
  })
  @post("{id}")
  static createDey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
