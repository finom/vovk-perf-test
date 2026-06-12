import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhr")
export default class FhrController {
  @operation({
    summary: "Get Fhr",
  })
  @get()
  static getFhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhr",
  })
  @post("{id}")
  static createFhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
