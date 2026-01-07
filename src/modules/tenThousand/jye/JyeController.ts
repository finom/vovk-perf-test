import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jye")
export default class JyeController {
  @operation({
    summary: "Get Jye",
  })
  @get()
  static getJye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jye",
  })
  @post("{id}")
  static createJye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
