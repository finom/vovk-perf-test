import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqf")
export default class DqfController {
  @operation({
    summary: "Get Dqf",
  })
  @get()
  static getDqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqf",
  })
  @post("{id}")
  static createDqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
