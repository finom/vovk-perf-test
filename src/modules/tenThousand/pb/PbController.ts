import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pb")
export default class PbController {
  @operation({
    summary: "Get Pb",
  })
  @get()
  static getPb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Pb",
  })
  @post("{id}")
  static createPb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
