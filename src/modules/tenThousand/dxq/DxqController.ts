import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxq")
export default class DxqController {
  @operation({
    summary: "Get Dxq",
  })
  @get()
  static getDxq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxq",
  })
  @post("{id}")
  static createDxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
