import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jem")
export default class JemController {
  @operation({
    summary: "Get Jem",
  })
  @get()
  static getJem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jem",
  })
  @post("{id}")
  static createJem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
