import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dab")
export default class DabController {
  @operation({
    summary: "Get Dab",
  })
  @get()
  static getDab = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dab",
  })
  @post("{id}")
  static createDab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
