import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtr")
export default class DtrController {
  @operation({
    summary: "Get Dtr",
  })
  @get()
  static getDtr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtr",
  })
  @post("{id}")
  static createDtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
