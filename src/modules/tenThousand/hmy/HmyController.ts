import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmy")
export default class HmyController {
  @operation({
    summary: "Get Hmy",
  })
  @get()
  static getHmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmy",
  })
  @post("{id}")
  static createHmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
