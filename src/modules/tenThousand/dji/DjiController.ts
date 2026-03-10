import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dji")
export default class DjiController {
  @operation({
    summary: "Get Dji",
  })
  @get()
  static getDji = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dji",
  })
  @post("{id}")
  static createDji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
