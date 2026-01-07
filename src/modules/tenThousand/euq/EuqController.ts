import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euq")
export default class EuqController {
  @operation({
    summary: "Get Euq",
  })
  @get()
  static getEuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euq",
  })
  @post("{id}")
  static createEuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
