import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngx")
export default class NgxController {
  @operation({
    summary: "Get Ngx",
  })
  @get()
  static getNgx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngx",
  })
  @post("{id}")
  static createNgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
