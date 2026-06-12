import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdw")
export default class BdwController {
  @operation({
    summary: "Get Bdw",
  })
  @get()
  static getBdw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdw",
  })
  @post("{id}")
  static createBdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
