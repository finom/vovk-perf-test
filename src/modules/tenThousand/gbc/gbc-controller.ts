import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbc")
export default class GbcController {
  @operation({
    summary: "Get Gbc",
  })
  @get()
  static getGbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbc",
  })
  @post("{id}")
  static createGbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
