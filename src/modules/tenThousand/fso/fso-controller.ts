import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fso")
export default class FsoController {
  @operation({
    summary: "Get Fso",
  })
  @get()
  static getFso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fso",
  })
  @post("{id}")
  static createFso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
