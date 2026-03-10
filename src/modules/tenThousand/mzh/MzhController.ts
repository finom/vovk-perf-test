import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzh")
export default class MzhController {
  @operation({
    summary: "Get Mzh",
  })
  @get()
  static getMzh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzh",
  })
  @post("{id}")
  static createMzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
