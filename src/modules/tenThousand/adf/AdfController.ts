import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adf")
export default class AdfController {
  @operation({
    summary: "Get Adf",
  })
  @get()
  static getAdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adf",
  })
  @post("{id}")
  static createAdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
