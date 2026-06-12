import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfd")
export default class BfdController {
  @operation({
    summary: "Get Bfd",
  })
  @get()
  static getBfd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfd",
  })
  @post("{id}")
  static createBfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
