import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krl")
export default class KrlController {
  @operation({
    summary: "Get Krl",
  })
  @get()
  static getKrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krl",
  })
  @post("{id}")
  static createKrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
