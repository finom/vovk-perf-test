import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bba")
export default class BbaController {
  @operation({
    summary: "Get Bba",
  })
  @get()
  static getBba = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bba",
  })
  @post("{id}")
  static createBba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
