import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fha")
export default class FhaController {
  @operation({
    summary: "Get Fha",
  })
  @get()
  static getFha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fha",
  })
  @post("{id}")
  static createFha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
