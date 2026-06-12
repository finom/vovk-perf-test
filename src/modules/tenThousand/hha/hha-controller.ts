import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hha")
export default class HhaController {
  @operation({
    summary: "Get Hha",
  })
  @get()
  static getHha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hha",
  })
  @post("{id}")
  static createHha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
