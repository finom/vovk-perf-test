import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxs")
export default class DxsController {
  @operation({
    summary: "Get Dxs",
  })
  @get()
  static getDxs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxs",
  })
  @post("{id}")
  static createDxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
