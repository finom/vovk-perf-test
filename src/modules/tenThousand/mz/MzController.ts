import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mz")
export default class MzController {
  @operation({
    summary: "Get Mz",
  })
  @get()
  static getMz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mz",
  })
  @post("{id}")
  static createMz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
