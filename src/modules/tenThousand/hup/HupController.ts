import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hup")
export default class HupController {
  @operation({
    summary: "Get Hup",
  })
  @get()
  static getHup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hup",
  })
  @post("{id}")
  static createHup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
