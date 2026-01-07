import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkk")
export default class MkkController {
  @operation({
    summary: "Get Mkk",
  })
  @get()
  static getMkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkk",
  })
  @post("{id}")
  static createMkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
