import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncq")
export default class NcqController {
  @operation({
    summary: "Get Ncq",
  })
  @get()
  static getNcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncq",
  })
  @post("{id}")
  static createNcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
