import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cme")
export default class CmeController {
  @operation({
    summary: "Get Cme",
  })
  @get()
  static getCme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cme",
  })
  @post("{id}")
  static createCme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
