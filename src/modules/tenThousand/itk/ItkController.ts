import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itk")
export default class ItkController {
  @operation({
    summary: "Get Itk",
  })
  @get()
  static getItk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itk",
  })
  @post("{id}")
  static createItk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
