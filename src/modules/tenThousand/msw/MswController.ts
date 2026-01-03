import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msws")
export default class MswController {
  @operation({
    summary: "Get Msws",
  })
  @get()
  static getMsws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msw",
  })
  @post("{id}")
  static createMsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
