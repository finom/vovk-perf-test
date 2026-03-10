import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfj")
export default class BfjController {
  @operation({
    summary: "Get Bfj",
  })
  @get()
  static getBfj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfj",
  })
  @post("{id}")
  static createBfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
