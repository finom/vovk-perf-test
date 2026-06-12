import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgi")
export default class BgiController {
  @operation({
    summary: "Get Bgi",
  })
  @get()
  static getBgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgi",
  })
  @post("{id}")
  static createBgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
