import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahx")
export default class AhxController {
  @operation({
    summary: "Get Ahx",
  })
  @get()
  static getAhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahx",
  })
  @post("{id}")
  static createAhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
