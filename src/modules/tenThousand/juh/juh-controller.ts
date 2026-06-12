import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juh")
export default class JuhController {
  @operation({
    summary: "Get Juh",
  })
  @get()
  static getJuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juh",
  })
  @post("{id}")
  static createJuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
