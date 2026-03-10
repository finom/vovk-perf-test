import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyl")
export default class DylController {
  @operation({
    summary: "Get Dyl",
  })
  @get()
  static getDyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyl",
  })
  @post("{id}")
  static createDyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
