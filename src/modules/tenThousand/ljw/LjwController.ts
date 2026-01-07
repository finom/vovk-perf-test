import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljw")
export default class LjwController {
  @operation({
    summary: "Get Ljw",
  })
  @get()
  static getLjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljw",
  })
  @post("{id}")
  static createLjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
