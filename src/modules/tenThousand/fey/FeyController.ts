import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fey")
export default class FeyController {
  @operation({
    summary: "Get Fey",
  })
  @get()
  static getFey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fey",
  })
  @post("{id}")
  static createFey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
