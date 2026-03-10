import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djf")
export default class DjfController {
  @operation({
    summary: "Get Djf",
  })
  @get()
  static getDjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djf",
  })
  @post("{id}")
  static createDjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
