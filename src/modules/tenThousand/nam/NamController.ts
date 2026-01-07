import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nam")
export default class NamController {
  @operation({
    summary: "Get Nam",
  })
  @get()
  static getNam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nam",
  })
  @post("{id}")
  static createNam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
