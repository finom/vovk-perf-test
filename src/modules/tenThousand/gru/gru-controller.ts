import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gru")
export default class GruController {
  @operation({
    summary: "Get Gru",
  })
  @get()
  static getGru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gru",
  })
  @post("{id}")
  static createGru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
