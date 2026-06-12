import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhv")
export default class LhvController {
  @operation({
    summary: "Get Lhv",
  })
  @get()
  static getLhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhv",
  })
  @post("{id}")
  static createLhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
