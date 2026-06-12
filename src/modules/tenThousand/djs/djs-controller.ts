import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djs")
export default class DjsController {
  @operation({
    summary: "Get Djs",
  })
  @get()
  static getDjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djs",
  })
  @post("{id}")
  static createDjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
