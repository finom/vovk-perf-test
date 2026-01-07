import { procedure, prefix, get, post, operation } from "vovk";

@prefix("in")
export default class InController {
  @operation({
    summary: "Get In",
  })
  @get()
  static getIn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create In",
  })
  @post("{id}")
  static createIn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
