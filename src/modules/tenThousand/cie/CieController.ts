import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cie")
export default class CieController {
  @operation({
    summary: "Get Cie",
  })
  @get()
  static getCie = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cie",
  })
  @post("{id}")
  static createCie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
