import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csz")
export default class CszController {
  @operation({
    summary: "Get Csz",
  })
  @get()
  static getCsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csz",
  })
  @post("{id}")
  static createCsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
