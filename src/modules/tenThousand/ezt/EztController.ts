import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezt")
export default class EztController {
  @operation({
    summary: "Get Ezt",
  })
  @get()
  static getEzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezt",
  })
  @post("{id}")
  static createEzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
