import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpm")
export default class MpmController {
  @operation({
    summary: "Get Mpm",
  })
  @get()
  static getMpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mpm",
  })
  @post("{id}")
  static createMpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
