import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doj")
export default class DojController {
  @operation({
    summary: "Get Doj",
  })
  @get()
  static getDoj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Doj",
  })
  @post("{id}")
  static createDoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
