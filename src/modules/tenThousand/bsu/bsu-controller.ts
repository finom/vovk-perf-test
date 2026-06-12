import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsu")
export default class BsuController {
  @operation({
    summary: "Get Bsu",
  })
  @get()
  static getBsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsu",
  })
  @post("{id}")
  static createBsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
