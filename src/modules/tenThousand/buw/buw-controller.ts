import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buw")
export default class BuwController {
  @operation({
    summary: "Get Buw",
  })
  @get()
  static getBuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Buw",
  })
  @post("{id}")
  static createBuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
