import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkt")
export default class DktController {
  @operation({
    summary: "Get Dkt",
  })
  @get()
  static getDkt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkt",
  })
  @post("{id}")
  static createDkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
