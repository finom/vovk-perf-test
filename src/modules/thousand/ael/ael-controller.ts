import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ael")
export default class AelController {
  @operation({
    summary: "Get Ael",
  })
  @get()
  static getAel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ael",
  })
  @post("{id}")
  static createAel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
