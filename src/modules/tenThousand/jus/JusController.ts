import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jus")
export default class JusController {
  @operation({
    summary: "Get Jus",
  })
  @get()
  static getJus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jus",
  })
  @post("{id}")
  static createJus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
