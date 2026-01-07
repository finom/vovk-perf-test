import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdc")
export default class MdcController {
  @operation({
    summary: "Get Mdc",
  })
  @get()
  static getMdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdc",
  })
  @post("{id}")
  static createMdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
