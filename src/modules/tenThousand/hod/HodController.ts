import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hod")
export default class HodController {
  @operation({
    summary: "Get Hod",
  })
  @get()
  static getHod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hod",
  })
  @post("{id}")
  static createHod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
