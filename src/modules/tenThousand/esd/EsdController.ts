import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esd")
export default class EsdController {
  @operation({
    summary: "Get Esd",
  })
  @get()
  static getEsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esd",
  })
  @post("{id}")
  static createEsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
