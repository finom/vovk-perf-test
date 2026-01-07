import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msf")
export default class MsfController {
  @operation({
    summary: "Get Msf",
  })
  @get()
  static getMsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msf",
  })
  @post("{id}")
  static createMsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
