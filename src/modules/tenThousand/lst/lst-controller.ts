import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lst")
export default class LstController {
  @operation({
    summary: "Get Lst",
  })
  @get()
  static getLst = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lst",
  })
  @post("{id}")
  static createLst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
