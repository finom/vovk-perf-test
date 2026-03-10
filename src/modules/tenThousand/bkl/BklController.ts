import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkl")
export default class BklController {
  @operation({
    summary: "Get Bkl",
  })
  @get()
  static getBkl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkl",
  })
  @post("{id}")
  static createBkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
