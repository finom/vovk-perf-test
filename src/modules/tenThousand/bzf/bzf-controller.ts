import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzf")
export default class BzfController {
  @operation({
    summary: "Get Bzf",
  })
  @get()
  static getBzf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzf",
  })
  @post("{id}")
  static createBzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
