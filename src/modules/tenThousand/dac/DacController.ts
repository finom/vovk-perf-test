import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dacs")
export default class DacController {
  @operation({
    summary: "Get Dacs",
  })
  @get()
  static getDacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dac",
  })
  @post("{id}")
  static createDac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
