import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgi")
export default class LgiController {
  @operation({
    summary: "Get Lgi",
  })
  @get()
  static getLgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgi",
  })
  @post("{id}")
  static createLgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
