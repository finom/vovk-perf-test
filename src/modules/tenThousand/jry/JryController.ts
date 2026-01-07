import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jry")
export default class JryController {
  @operation({
    summary: "Get Jry",
  })
  @get()
  static getJry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jry",
  })
  @post("{id}")
  static createJry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
