import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asl")
export default class AslController {
  @operation({
    summary: "Get Asl",
  })
  @get()
  static getAsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asl",
  })
  @post("{id}")
  static createAsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
