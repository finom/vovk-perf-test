import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jco")
export default class JcoController {
  @operation({
    summary: "Get Jco",
  })
  @get()
  static getJco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jco",
  })
  @post("{id}")
  static createJco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
