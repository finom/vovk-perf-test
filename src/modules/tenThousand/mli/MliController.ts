import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mli")
export default class MliController {
  @operation({
    summary: "Get Mli",
  })
  @get()
  static getMli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mli",
  })
  @post("{id}")
  static createMli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
