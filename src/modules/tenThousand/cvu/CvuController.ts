import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvu")
export default class CvuController {
  @operation({
    summary: "Get Cvu",
  })
  @get()
  static getCvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvu",
  })
  @post("{id}")
  static createCvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
