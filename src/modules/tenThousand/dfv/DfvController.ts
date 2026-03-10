import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfv")
export default class DfvController {
  @operation({
    summary: "Get Dfv",
  })
  @get()
  static getDfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfv",
  })
  @post("{id}")
  static createDfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
