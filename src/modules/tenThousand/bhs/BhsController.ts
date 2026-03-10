import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhs")
export default class BhsController {
  @operation({
    summary: "Get Bhs",
  })
  @get()
  static getBhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhs",
  })
  @post("{id}")
  static createBhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
