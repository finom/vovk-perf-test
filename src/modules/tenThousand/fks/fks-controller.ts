import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fks")
export default class FksController {
  @operation({
    summary: "Get Fks",
  })
  @get()
  static getFks = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fks",
  })
  @post("{id}")
  static createFks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
