import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeq")
export default class EeqController {
  @operation({
    summary: "Get Eeq",
  })
  @get()
  static getEeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeq",
  })
  @post("{id}")
  static createEeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
