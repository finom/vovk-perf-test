import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyr")
export default class FyrController {
  @operation({
    summary: "Get Fyr",
  })
  @get()
  static getFyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyr",
  })
  @post("{id}")
  static createFyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
