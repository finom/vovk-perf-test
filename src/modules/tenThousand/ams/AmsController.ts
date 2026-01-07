import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ams")
export default class AmsController {
  @operation({
    summary: "Get Ams",
  })
  @get()
  static getAms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ams",
  })
  @post("{id}")
  static createAms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
