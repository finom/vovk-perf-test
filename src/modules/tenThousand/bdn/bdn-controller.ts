import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdn")
export default class BdnController {
  @operation({
    summary: "Get Bdn",
  })
  @get()
  static getBdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdn",
  })
  @post("{id}")
  static createBdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
