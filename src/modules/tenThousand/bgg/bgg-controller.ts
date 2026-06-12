import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgg")
export default class BggController {
  @operation({
    summary: "Get Bgg",
  })
  @get()
  static getBgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgg",
  })
  @post("{id}")
  static createBgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
