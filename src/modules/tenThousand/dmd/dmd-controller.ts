import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmd")
export default class DmdController {
  @operation({
    summary: "Get Dmd",
  })
  @get()
  static getDmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmd",
  })
  @post("{id}")
  static createDmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
