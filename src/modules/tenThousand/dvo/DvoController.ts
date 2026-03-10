import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvo")
export default class DvoController {
  @operation({
    summary: "Get Dvo",
  })
  @get()
  static getDvo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvo",
  })
  @post("{id}")
  static createDvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
