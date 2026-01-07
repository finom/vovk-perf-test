import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enr")
export default class EnrController {
  @operation({
    summary: "Get Enr",
  })
  @get()
  static getEnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enr",
  })
  @post("{id}")
  static createEnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
