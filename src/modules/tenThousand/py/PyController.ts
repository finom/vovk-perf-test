import { procedure, prefix, get, post, operation } from "vovk";

@prefix("py")
export default class PyController {
  @operation({
    summary: "Get Py",
  })
  @get()
  static getPy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Py",
  })
  @post("{id}")
  static createPy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
