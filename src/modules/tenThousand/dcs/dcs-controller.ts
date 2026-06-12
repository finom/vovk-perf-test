import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcs")
export default class DcsController {
  @operation({
    summary: "Get Dcs",
  })
  @get()
  static getDcs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcs",
  })
  @post("{id}")
  static createDcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
