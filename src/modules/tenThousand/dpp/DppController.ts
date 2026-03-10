import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpp")
export default class DppController {
  @operation({
    summary: "Get Dpp",
  })
  @get()
  static getDpp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpp",
  })
  @post("{id}")
  static createDpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
