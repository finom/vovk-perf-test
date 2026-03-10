import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvv")
export default class FvvController {
  @operation({
    summary: "Get Fvv",
  })
  @get()
  static getFvv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvv",
  })
  @post("{id}")
  static createFvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
