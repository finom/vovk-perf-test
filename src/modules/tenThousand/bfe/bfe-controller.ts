import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfe")
export default class BfeController {
  @operation({
    summary: "Get Bfe",
  })
  @get()
  static getBfe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfe",
  })
  @post("{id}")
  static createBfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
