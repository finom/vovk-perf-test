import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bab")
export default class BabController {
  @operation({
    summary: "Get Bab",
  })
  @get()
  static getBab = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bab",
  })
  @post("{id}")
  static createBab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
