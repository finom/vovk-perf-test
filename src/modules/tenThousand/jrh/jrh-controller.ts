import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrh")
export default class JrhController {
  @operation({
    summary: "Get Jrh",
  })
  @get()
  static getJrh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrh",
  })
  @post("{id}")
  static createJrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
