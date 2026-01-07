import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asg")
export default class AsgController {
  @operation({
    summary: "Get Asg",
  })
  @get()
  static getAsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asg",
  })
  @post("{id}")
  static createAsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
