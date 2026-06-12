import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfz")
export default class BfzController {
  @operation({
    summary: "Get Bfz",
  })
  @get()
  static getBfz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfz",
  })
  @post("{id}")
  static createBfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
