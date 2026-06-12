import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buc")
export default class BucController {
  @operation({
    summary: "Get Buc",
  })
  @get()
  static getBuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Buc",
  })
  @post("{id}")
  static createBuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
