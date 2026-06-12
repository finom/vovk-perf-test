import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bew")
export default class BewController {
  @operation({
    summary: "Get Bew",
  })
  @get()
  static getBew = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bew",
  })
  @post("{id}")
  static createBew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
