import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvp")
export default class FvpController {
  @operation({
    summary: "Get Fvp",
  })
  @get()
  static getFvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvp",
  })
  @post("{id}")
  static createFvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
