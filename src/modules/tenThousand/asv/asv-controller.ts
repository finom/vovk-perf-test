import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asv")
export default class AsvController {
  @operation({
    summary: "Get Asv",
  })
  @get()
  static getAsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asv",
  })
  @post("{id}")
  static createAsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
