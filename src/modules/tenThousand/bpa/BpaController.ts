import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpa")
export default class BpaController {
  @operation({
    summary: "Get Bpa",
  })
  @get()
  static getBpa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpa",
  })
  @post("{id}")
  static createBpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
