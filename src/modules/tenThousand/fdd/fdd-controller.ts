import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdd")
export default class FddController {
  @operation({
    summary: "Get Fdd",
  })
  @get()
  static getFdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdd",
  })
  @post("{id}")
  static createFdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
