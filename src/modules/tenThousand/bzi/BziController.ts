import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzi")
export default class BziController {
  @operation({
    summary: "Get Bzi",
  })
  @get()
  static getBzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzi",
  })
  @post("{id}")
  static createBzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
