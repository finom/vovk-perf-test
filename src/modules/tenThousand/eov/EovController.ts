import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eov")
export default class EovController {
  @operation({
    summary: "Get Eov",
  })
  @get()
  static getEov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eov",
  })
  @post("{id}")
  static createEov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
