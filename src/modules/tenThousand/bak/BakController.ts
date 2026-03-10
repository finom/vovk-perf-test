import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bak")
export default class BakController {
  @operation({
    summary: "Get Bak",
  })
  @get()
  static getBak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bak",
  })
  @post("{id}")
  static createBak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
