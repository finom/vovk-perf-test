import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrh")
export default class HrhController {
  @operation({
    summary: "Get Hrh",
  })
  @get()
  static getHrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrh",
  })
  @post("{id}")
  static createHrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
