import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvi")
export default class DviController {
  @operation({
    summary: "Get Dvi",
  })
  @get()
  static getDvi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvi",
  })
  @post("{id}")
  static createDvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
