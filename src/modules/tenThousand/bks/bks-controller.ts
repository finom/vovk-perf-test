import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bks")
export default class BksController {
  @operation({
    summary: "Get Bks",
  })
  @get()
  static getBks = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bks",
  })
  @post("{id}")
  static createBks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
