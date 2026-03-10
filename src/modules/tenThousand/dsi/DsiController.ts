import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsi")
export default class DsiController {
  @operation({
    summary: "Get Dsi",
  })
  @get()
  static getDsi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsi",
  })
  @post("{id}")
  static createDsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
