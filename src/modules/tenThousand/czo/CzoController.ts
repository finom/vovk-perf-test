import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czo")
export default class CzoController {
  @operation({
    summary: "Get Czo",
  })
  @get()
  static getCzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czo",
  })
  @post("{id}")
  static createCzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
