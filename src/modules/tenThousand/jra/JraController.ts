import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jra")
export default class JraController {
  @operation({
    summary: "Get Jra",
  })
  @get()
  static getJra = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jra",
  })
  @post("{id}")
  static createJra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
