import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrs")
export default class HrsController {
  @operation({
    summary: "Get Hrs",
  })
  @get()
  static getHrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrs",
  })
  @post("{id}")
  static createHrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
