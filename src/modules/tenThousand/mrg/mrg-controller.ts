import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrg")
export default class MrgController {
  @operation({
    summary: "Get Mrg",
  })
  @get()
  static getMrg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrg",
  })
  @post("{id}")
  static createMrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
