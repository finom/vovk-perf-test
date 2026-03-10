import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fge")
export default class FgeController {
  @operation({
    summary: "Get Fge",
  })
  @get()
  static getFge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fge",
  })
  @post("{id}")
  static createFge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
