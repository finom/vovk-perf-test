import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzx")
export default class BzxController {
  @operation({
    summary: "Get Bzx",
  })
  @get()
  static getBzx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzx",
  })
  @post("{id}")
  static createBzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
