import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dob")
export default class DobController {
  @operation({
    summary: "Get Dob",
  })
  @get()
  static getDob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dob",
  })
  @post("{id}")
  static createDob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
