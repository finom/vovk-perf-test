import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bha")
export default class BhaController {
  @operation({
    summary: "Get Bha",
  })
  @get()
  static getBha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bha",
  })
  @post("{id}")
  static createBha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
