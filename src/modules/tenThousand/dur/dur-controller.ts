import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dur")
export default class DurController {
  @operation({
    summary: "Get Dur",
  })
  @get()
  static getDur = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dur",
  })
  @post("{id}")
  static createDur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
