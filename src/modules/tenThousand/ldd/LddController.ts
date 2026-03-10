import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldd")
export default class LddController {
  @operation({
    summary: "Get Ldd",
  })
  @get()
  static getLdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldd",
  })
  @post("{id}")
  static createLdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
