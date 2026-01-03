import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dis")
export default class DisController {
  @operation({
    summary: "Get Dis",
  })
  @get()
  static getDis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dis",
  })
  @post("{id}")
  static createDis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
