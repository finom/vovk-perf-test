import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kko")
export default class KkoController {
  @operation({
    summary: "Get Kko",
  })
  @get()
  static getKko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kko",
  })
  @post("{id}")
  static createKko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
