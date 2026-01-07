import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myx")
export default class MyxController {
  @operation({
    summary: "Get Myx",
  })
  @get()
  static getMyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myx",
  })
  @post("{id}")
  static createMyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
