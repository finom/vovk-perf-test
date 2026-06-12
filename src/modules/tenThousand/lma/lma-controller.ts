import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lma")
export default class LmaController {
  @operation({
    summary: "Get Lma",
  })
  @get()
  static getLma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lma",
  })
  @post("{id}")
  static createLma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
