import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bct")
export default class BctController {
  @operation({
    summary: "Get Bct",
  })
  @get()
  static getBct = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bct",
  })
  @post("{id}")
  static createBct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
