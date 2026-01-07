import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axc")
export default class AxcController {
  @operation({
    summary: "Get Axc",
  })
  @get()
  static getAxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axc",
  })
  @post("{id}")
  static createAxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
