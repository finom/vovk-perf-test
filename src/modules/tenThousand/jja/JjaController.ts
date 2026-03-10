import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jja")
export default class JjaController {
  @operation({
    summary: "Get Jja",
  })
  @get()
  static getJja = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jja",
  })
  @post("{id}")
  static createJja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
