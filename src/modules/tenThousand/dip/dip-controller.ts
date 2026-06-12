import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dip")
export default class DipController {
  @operation({
    summary: "Get Dip",
  })
  @get()
  static getDip = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dip",
  })
  @post("{id}")
  static createDip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
