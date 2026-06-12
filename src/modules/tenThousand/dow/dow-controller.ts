import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dow")
export default class DowController {
  @operation({
    summary: "Get Dow",
  })
  @get()
  static getDow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dow",
  })
  @post("{id}")
  static createDow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
