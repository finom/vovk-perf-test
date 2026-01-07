import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ey")
export default class EyController {
  @operation({
    summary: "Get Ey",
  })
  @get()
  static getEy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ey",
  })
  @post("{id}")
  static createEy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
