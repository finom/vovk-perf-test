import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzu")
export default class BzuController {
  @operation({
    summary: "Get Bzu",
  })
  @get()
  static getBzu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzu",
  })
  @post("{id}")
  static createBzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
