import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fma")
export default class FmaController {
  @operation({
    summary: "Get Fma",
  })
  @get()
  static getFma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fma",
  })
  @post("{id}")
  static createFma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
