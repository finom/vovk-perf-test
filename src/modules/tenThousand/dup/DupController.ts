import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dup")
export default class DupController {
  @operation({
    summary: "Get Dup",
  })
  @get()
  static getDup = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dup",
  })
  @post("{id}")
  static createDup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
