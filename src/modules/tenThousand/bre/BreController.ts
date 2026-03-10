import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bre")
export default class BreController {
  @operation({
    summary: "Get Bre",
  })
  @get()
  static getBre = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bre",
  })
  @post("{id}")
  static createBre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
