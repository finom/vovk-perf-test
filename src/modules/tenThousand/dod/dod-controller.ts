import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dod")
export default class DodController {
  @operation({
    summary: "Get Dod",
  })
  @get()
  static getDod = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dod",
  })
  @post("{id}")
  static createDod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
