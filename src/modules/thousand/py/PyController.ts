import { procedure, prefix, get, post, operation } from "vovk";

@prefix("py")
export default class PyController {
  @operation({
    summary: "Get Py",
  })
  @get()
  static getPy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Py",
  })
  @post("{id}")
  static createPy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
