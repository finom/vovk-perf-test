import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("na")
export default class NaController {
  @operation({
    summary: "Get Na",
  })
  @get()
  static getNa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Na",
  })
  @post("{id}")
  static createNa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
