import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krn")
export default class KrnController {
  @operation({
    summary: "Get Krn",
  })
  @get()
  static getKrn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krn",
  })
  @post("{id}")
  static createKrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
