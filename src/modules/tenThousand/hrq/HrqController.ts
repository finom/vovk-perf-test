import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrq")
export default class HrqController {
  @operation({
    summary: "Get Hrq",
  })
  @get()
  static getHrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrq",
  })
  @post("{id}")
  static createHrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
