import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfc")
export default class BfcController {
  @operation({
    summary: "Get Bfc",
  })
  @get()
  static getBfc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfc",
  })
  @post("{id}")
  static createBfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
