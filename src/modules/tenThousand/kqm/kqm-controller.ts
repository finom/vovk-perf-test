import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqm")
export default class KqmController {
  @operation({
    summary: "Get Kqm",
  })
  @get()
  static getKqm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqm",
  })
  @post("{id}")
  static createKqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
