import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abt")
export default class AbtController {
  @operation({
    summary: "Get Abt",
  })
  @get()
  static getAbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abt",
  })
  @post("{id}")
  static createAbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
