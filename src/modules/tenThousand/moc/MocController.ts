import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moc")
export default class MocController {
  @operation({
    summary: "Get Moc",
  })
  @get()
  static getMoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moc",
  })
  @post("{id}")
  static createMoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
