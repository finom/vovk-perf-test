import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dft")
export default class DftController {
  @operation({
    summary: "Get Dft",
  })
  @get()
  static getDft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dft",
  })
  @post("{id}")
  static createDft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
