import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyx")
export default class JyxController {
  @operation({
    summary: "Get Jyx",
  })
  @get()
  static getJyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyx",
  })
  @post("{id}")
  static createJyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
