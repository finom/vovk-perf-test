import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkc")
export default class DkcController {
  @operation({
    summary: "Get Dkc",
  })
  @get()
  static getDkc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkc",
  })
  @post("{id}")
  static createDkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
