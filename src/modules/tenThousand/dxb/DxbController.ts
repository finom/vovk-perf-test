import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxb")
export default class DxbController {
  @operation({
    summary: "Get Dxb",
  })
  @get()
  static getDxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxb",
  })
  @post("{id}")
  static createDxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
