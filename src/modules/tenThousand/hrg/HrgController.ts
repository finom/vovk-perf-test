import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrg")
export default class HrgController {
  @operation({
    summary: "Get Hrg",
  })
  @get()
  static getHrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrg",
  })
  @post("{id}")
  static createHrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
