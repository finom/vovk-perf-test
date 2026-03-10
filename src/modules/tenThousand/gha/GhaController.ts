import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gha")
export default class GhaController {
  @operation({
    summary: "Get Gha",
  })
  @get()
  static getGha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gha",
  })
  @post("{id}")
  static createGha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
