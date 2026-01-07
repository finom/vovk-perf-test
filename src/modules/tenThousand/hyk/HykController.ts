import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyk")
export default class HykController {
  @operation({
    summary: "Get Hyk",
  })
  @get()
  static getHyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyk",
  })
  @post("{id}")
  static createHyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
