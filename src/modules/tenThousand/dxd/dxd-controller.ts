import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxd")
export default class DxdController {
  @operation({
    summary: "Get Dxd",
  })
  @get()
  static getDxd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxd",
  })
  @post("{id}")
  static createDxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
