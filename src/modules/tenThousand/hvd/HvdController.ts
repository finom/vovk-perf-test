import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvd")
export default class HvdController {
  @operation({
    summary: "Get Hvd",
  })
  @get()
  static getHvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvd",
  })
  @post("{id}")
  static createHvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
