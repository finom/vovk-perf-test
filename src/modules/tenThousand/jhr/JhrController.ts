import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhr")
export default class JhrController {
  @operation({
    summary: "Get Jhr",
  })
  @get()
  static getJhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhr",
  })
  @post("{id}")
  static createJhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
