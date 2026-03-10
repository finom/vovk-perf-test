import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpm")
export default class DpmController {
  @operation({
    summary: "Get Dpm",
  })
  @get()
  static getDpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpm",
  })
  @post("{id}")
  static createDpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
