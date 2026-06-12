import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzf")
export default class MzfController {
  @operation({
    summary: "Get Mzf",
  })
  @get()
  static getMzf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzf",
  })
  @post("{id}")
  static createMzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
