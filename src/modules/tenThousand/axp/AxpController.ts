import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axp")
export default class AxpController {
  @operation({
    summary: "Get Axp",
  })
  @get()
  static getAxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axp",
  })
  @post("{id}")
  static createAxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
