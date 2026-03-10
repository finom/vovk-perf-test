import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pv")
export default class PvController {
  @operation({
    summary: "Get Pv",
  })
  @get()
  static getPv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Pv",
  })
  @post("{id}")
  static createPv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
