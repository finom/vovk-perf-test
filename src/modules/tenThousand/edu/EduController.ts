import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edu")
export default class EduController {
  @operation({
    summary: "Get Edu",
  })
  @get()
  static getEdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edu",
  })
  @post("{id}")
  static createEdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
