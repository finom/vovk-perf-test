import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myi")
export default class MyiController {
  @operation({
    summary: "Get Myi",
  })
  @get()
  static getMyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myi",
  })
  @post("{id}")
  static createMyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
