import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdh")
export default class JdhController {
  @operation({
    summary: "Get Jdh",
  })
  @get()
  static getJdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdh",
  })
  @post("{id}")
  static createJdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
