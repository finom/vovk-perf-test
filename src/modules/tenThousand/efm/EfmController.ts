import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efm")
export default class EfmController {
  @operation({
    summary: "Get Efm",
  })
  @get()
  static getEfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efm",
  })
  @post("{id}")
  static createEfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
