import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erx")
export default class ErxController {
  @operation({
    summary: "Get Erx",
  })
  @get()
  static getErx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erx",
  })
  @post("{id}")
  static createErx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
